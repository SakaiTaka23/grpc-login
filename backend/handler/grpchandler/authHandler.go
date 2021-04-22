package grpchandler

import (
	"backend/entity/model"
	"backend/handler/auth"
	pb "backend/handler/proto"
	"backend/handler/utils"
	"backend/usecase"
	"context"
	"log"

	"github.com/golang/protobuf/ptypes/empty"
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
)

type AuthHandler struct {
	authUsecase usecase.AuthUsecase
	pb.UnimplementedAuthServiceServer
}

func NewAuthHandler(authUsecase usecase.AuthUsecase) AuthHandler {
	authHandler := AuthHandler{authUsecase: authUsecase}
	return authHandler
}

func (handler *AuthHandler) Delete(ctx context.Context, r *empty.Empty) (*empty.Empty, error) {
	id := ctx.Value("user_id").(string)
	_ = handler.authUsecase.Delete(id)
	return &empty.Empty{}, nil
}

func (handler *AuthHandler) Register(ctx context.Context, r *pb.RegisterRequest) (*pb.RegisterResponse, error) {
	uid := uuid.New().String()
	password, _ := bcrypt.GenerateFromPassword([]byte(r.GetPassword()), 14)
	user := model.User{
		ID:       uid,
		Email:    r.GetEmail(),
		Name:     r.GetName(),
		Password: password,
	}

	uid, err := handler.authUsecase.Register(&user)
	if err != nil {
		return nil, err
	}

	return &pb.RegisterResponse{Uid: uid}, nil
}

func (handler *AuthHandler) Login(ctx context.Context, r *pb.LoginRequest) (*empty.Empty, error) {
	user := model.User{
		Email:    r.GetEmail(),
		Password: []byte(r.GetPassword()),
	}

	token, err := handler.authUsecase.Login(&user)

	if err != nil {
		return nil, err
	}

	_ = grpc.SetHeader(ctx, metadata.Pairs("jwt", token))
	return &empty.Empty{}, nil
}

func (handler *AuthHandler) AuthFuncOverride(ctx context.Context, fullMethodName string) (context.Context, error) {
	log.Println("client is calling method:", fullMethodName)
	skipAuth := []string{"/proto.AuthService/register", "/proto.AuthService/login"}
	if utils.Contains(skipAuth, fullMethodName) {
		return ctx, nil
	}

	ctx, err := auth.Authenticate(ctx)
	if err != nil {
		return ctx, err
	}

	return ctx, nil
}
