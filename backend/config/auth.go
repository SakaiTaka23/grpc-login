package config

import (
	"context"
	"log"

	grpc_auth "github.com/grpc-ecosystem/go-grpc-middleware/auth"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func Authenticate(ctx context.Context) (context.Context, error) {
	token, err := grpc_auth.AuthFromMD(ctx, "bearer")
	log.Printf("Recieved : Token %s", token)
	if err != nil {
		return nil, status.Errorf(codes.Unauthenticated, "Token is not set")
	}
	if token != "I am jwt token" {
		return nil, status.Errorf(codes.Unauthenticated, "Token must be 'I am jwt token'")
	}
	return ctx, err
}
