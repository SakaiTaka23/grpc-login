package server

import (
	pb "backend/handler/proto"
	"backend/injector"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func SetRouter(s *grpc.Server) *grpc.Server {
	pb.RegisterAuthServiceServer(s, injector.InjectAuthHandler().UnimplementedAuthServiceServer)
	// pb.RegisterUserServiceServer(s, &grpchandler.UserHandler{})
	pb.RegisterUserServiceServer(s, injector.InjectUserHandler().UnimplementedUserServiceServer)
	reflection.Register(s)

	return s
}
