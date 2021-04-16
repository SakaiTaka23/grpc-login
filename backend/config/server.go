package config

import (
	"backend/handler"
	pb "backend/proto"

	grpc_middleware "github.com/grpc-ecosystem/go-grpc-middleware"
	grpc_auth "github.com/grpc-ecosystem/go-grpc-middleware/auth"
	grpc_zap "github.com/grpc-ecosystem/go-grpc-middleware/logging/zap"
	grpc_validator "github.com/grpc-ecosystem/go-grpc-middleware/validator"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func CreateServer() *grpc.Server {

	logger, opts := SetLog()

	s := grpc.NewServer(
		grpc.UnaryInterceptor(
			grpc_middleware.ChainUnaryServer(
				grpc_zap.UnaryServerInterceptor(logger, opts...),
				grpc_validator.UnaryServerInterceptor(),
				grpc_auth.UnaryServerInterceptor(Authenticate),
			),
		),
		grpc.StreamInterceptor(
			grpc_middleware.ChainStreamServer(
				grpc_zap.StreamServerInterceptor(logger, opts...),
				grpc_validator.StreamServerInterceptor(),
				grpc_auth.StreamServerInterceptor(Authenticate),
			),
		),
	)

	pb.RegisterAuthServiceServer(s, &handler.AuthServiceServer{})
	reflection.Register(s)

	return s
}
