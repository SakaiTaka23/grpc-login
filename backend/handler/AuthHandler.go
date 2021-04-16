package handler

import (
	pb "backend/proto"
	"context"
)

type AuthServiceServer struct {
	pb.UnimplementedAuthServiceServer
}

func (s *AuthServiceServer) Register(ctx context.Context, r *pb.RegisterRequest) (*pb.RegisterResponse, error) {
	if err := r.Validate(true); err != nil {
		return nil, err
	}
	return &pb.RegisterResponse{Uid: "1"}, nil
}
