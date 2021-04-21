package handler

import (
	"backend/database"
	"backend/domain"
	"backend/handler/auth"
	pb "backend/proto"
	"context"
	"log"
	"time"

	"github.com/dgrijalva/jwt-go"
	empty "github.com/golang/protobuf/ptypes/empty"
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
)

const SecretKey = "secret"

type AuthServiceServer struct {
	pb.UnimplementedAuthServiceServer
}

func (s *AuthServiceServer) Register(ctx context.Context, r *pb.RegisterRequest) (*pb.RegisterResponse, error) {

	uid := uuid.New().String()
	password, _ := bcrypt.GenerateFromPassword([]byte(r.GetPassword()), 14)
	user := domain.User{
		ID:       uid,
		Email:    r.GetEmail(),
		Name:     r.GetName(),
		Password: password,
	}

	uid = database.CreateUser(&user)

	return &pb.RegisterResponse{Uid: uid}, nil
}

func (s *AuthServiceServer) Login(ctx context.Context, r *pb.LoginRequest) (*empty.Empty, error) {
	if err := r.Validate(true); err != nil {
		return nil, err
	}

	user := database.FindUserFromMail(r.GetEmail())

	if user.ID == "" {
		return nil, status.Errorf(codes.Unauthenticated, "The user does not exist")
	}

	if err := bcrypt.CompareHashAndPassword(user.Password, []byte(r.GetPassword())); err != nil {
		return nil, status.Errorf(codes.Unauthenticated, "Incorrect password")
	}

	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
		Issuer:    user.ID,
		ExpiresAt: time.Now().Add(time.Hour * 24).Unix(),
	})

	token, _ := claims.SignedString([]byte(SecretKey))
	_ = grpc.SetTrailer(ctx, metadata.Pairs("jwt", token))

	return &empty.Empty{}, nil
}

func (s *AuthServiceServer) Delete(ctx context.Context, r *empty.Empty) (*empty.Empty, error) {
	id := ctx.Value("user_id").(string)
	database.DeleteUser(id)
	return &empty.Empty{}, nil
}

func (s *AuthServiceServer) AuthFuncOverride(ctx context.Context, fullMethodName string) (context.Context, error) {
	log.Println("client is calling method:", fullMethodName)
	skipAuth := []string{"/proto.AuthService/register", "/proto.AuthService/login"}
	if auth.Contains(skipAuth, fullMethodName) {
		return ctx, nil
	}

	ctx, err := auth.Authenticate(ctx)
	if err != nil {
		return ctx, err
	}

	return ctx, nil
}
