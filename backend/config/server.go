package config

import (
	"backend/handler"
	"backend/handler/auth"
	pb "backend/proto"

	grpc_middleware "github.com/grpc-ecosystem/go-grpc-middleware"
	grpc_auth "github.com/grpc-ecosystem/go-grpc-middleware/auth"
	grpc_zap "github.com/grpc-ecosystem/go-grpc-middleware/logging/zap"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func CreateServer() *grpc.Server {

	logger, opts := SetLog()

	s := grpc.NewServer(
		grpc.UnaryInterceptor(
			grpc_middleware.ChainUnaryServer(
				grpc_zap.UnaryServerInterceptor(logger, opts...),
				UnaryServerInterceptor(),
				grpc_auth.UnaryServerInterceptor(auth.Authenticate),
			),
		),
		grpc.StreamInterceptor(
			grpc_middleware.ChainStreamServer(
				grpc_zap.StreamServerInterceptor(logger, opts...),
				StreamServerInterceptor(),
				grpc_auth.StreamServerInterceptor(auth.Authenticate),
			),
		),
	)

	pb.RegisterAuthServiceServer(s, &handler.AuthServiceServer{})
	pb.RegisterUserServiceServer(s, &handler.UserServiceServer{})
	reflection.Register(s)

	return s
}
