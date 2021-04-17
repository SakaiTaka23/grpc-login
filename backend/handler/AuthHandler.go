package handler

import (
	"backend/database"
	"backend/domain"
	pb "backend/proto"
	"context"

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
