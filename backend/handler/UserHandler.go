package handler

import (
	pb "backend/proto"
	"context"

	"github.com/golang/protobuf/ptypes/empty"
)

type UserServiceServer struct {
	pb.UnimplementedUserServiceServer
}

func (s *UserServiceServer) User(ctx context.Context, r *empty.Empty) (*pb.UserResponse, error) {
	return &pb.UserResponse{Email: "test@test.com", Name: "test"}, nil
}
