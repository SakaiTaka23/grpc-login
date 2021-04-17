package handler

import (
	"backend/database"
	"backend/domain"
	"backend/handler/auth"
	pb "backend/proto"
	"context"
	"log"

	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
)

type AuthServiceServer struct {
	pb.UnimplementedAuthServiceServer
}

func (s *AuthServiceServer) Register(ctx context.Context, r *pb.RegisterRequest) (*pb.RegisterResponse, error) {
	if err := r.Validate(true); err != nil {
		return nil, err
	}

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

func (s *AuthServiceServer) AuthFuncOverride(ctx context.Context, fullMethodName string) (context.Context, error) {
	log.Println("client is calling method:", fullMethodName)
	skipAuth := []string{"/proto.AuthService/register"}
	if auth.Contains(skipAuth, fullMethodName) {
		return ctx, nil
	}

	ctx, err := auth.Authenticate(ctx)
	if err != nil {
		return ctx, err
	}

	return ctx, nil
}
