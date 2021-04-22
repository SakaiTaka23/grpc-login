package grpchandler

import (
	pb "backend/handler/proto"
	"backend/usecase"
	"context"
	"log"

	"github.com/golang/protobuf/ptypes/empty"
)

type UserHandler struct {
	userUsecase usecase.UserUsecase
	pb.UnimplementedUserServiceServer
}

func NewUserHandler(userUsecase usecase.UserUsecase) UserHandler {
	userHandler := UserHandler{userUsecase: userUsecase}
	return userHandler
}

func (handler *UserHandler) User(ctx context.Context, r *empty.Empty) (*pb.UserResponse, error) {
	log.Printf("user_id : %s", ctx.Value("user_id"))
	id := ctx.Value("user_id").(string)
	user := handler.userUsecase.User(id)
	return &pb.UserResponse{Email: user.Email, Name: user.Name}, nil
}
