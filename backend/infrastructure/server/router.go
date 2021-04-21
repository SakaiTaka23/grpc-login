package server

import (
	pb "backend/handler/proto"
	"backend/injector"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func SetRouter(s *grpc.Server) *grpc.Server {
	authHandler := injector.InjectAuthHandler()
	pb.RegisterAuthServiceServer(s, &authHandler)
	userHandler := injector.InjectUserHandler()
	pb.RegisterUserServiceServer(s, &userHandler)
	reflection.Register(s)

	return s
}
