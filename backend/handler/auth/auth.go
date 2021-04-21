package auth

import (
	"context"
	"log"

	"github.com/dgrijalva/jwt-go"
	grpc_auth "github.com/grpc-ecosystem/go-grpc-middleware/auth"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func Authenticate(ctx context.Context) (context.Context, error) {
	SecretKey := getKey()
	token, err := grpc_auth.AuthFromMD(ctx, "bearer")
	log.Printf("Recieved : Token %s", token)
	if err != nil {
		return nil, status.Errorf(codes.Unauthenticated, "Token is not set")
	}

	token_parsed, err := jwt.ParseWithClaims(token, &jwt.StandardClaims{}, func(t *jwt.Token) (interface{}, error) {
		return []byte(SecretKey), nil
	})

	if err != nil {
		log.Println(err)
		return nil, status.Errorf(codes.Unauthenticated, "Token is not valid")
	}

	claims := token_parsed.Claims.(*jwt.StandardClaims)

	ctx = context.WithValue(ctx, "user_id", claims.Issuer)

	return ctx, err
}

func getKey() string {
	// err := godotenv.Load("../../.env")
	// if err != nil {
	// 	log.Fatal("Error loading .env file")
	// }
	// return os.Getenv("SecretKey")
	return "secret"
}
