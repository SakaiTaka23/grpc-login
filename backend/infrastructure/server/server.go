package server

import (
	"backend/handler/auth"
	"backend/infrastructure/middleware"

	grpc_middleware "github.com/grpc-ecosystem/go-grpc-middleware"
	grpc_auth "github.com/grpc-ecosystem/go-grpc-middleware/auth"
	grpc_zap "github.com/grpc-ecosystem/go-grpc-middleware/logging/zap"
	"google.golang.org/grpc"
)

func Create() *grpc.Server {

	logger, opts := middleware.SetLog()

	s := grpc.NewServer(
		grpc.UnaryInterceptor(
			grpc_middleware.ChainUnaryServer(
				grpc_zap.UnaryServerInterceptor(logger, opts...),
				middleware.UnaryServerInterceptor(),
				grpc_auth.UnaryServerInterceptor(auth.Authenticate),
			),
		),
		grpc.StreamInterceptor(
			grpc_middleware.ChainStreamServer(
				grpc_zap.StreamServerInterceptor(logger, opts...),
				middleware.StreamServerInterceptor(),
				grpc_auth.StreamServerInterceptor(auth.Authenticate),
			),
		),
	)

	return s
}
