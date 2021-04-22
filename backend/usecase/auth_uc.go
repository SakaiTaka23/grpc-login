package usecase

import (
	"backend/entity/model"
	"backend/entity/repository"
	"os"
	"time"

	"github.com/dgrijalva/jwt-go"
	"golang.org/x/crypto/bcrypt"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type AuthUsecase interface {
	Register(user *model.User) (string, error)
	Login(user *model.User) (string, error)
	Delete(id string) error
}

type authUsecase struct {
	userRepo repository.UserRepository
}

func NewAuthUsecase(userRepo repository.UserRepository) AuthUsecase {
	authUsecase := authUsecase{userRepo: userRepo}
	return &authUsecase
}

func (usecase *authUsecase) Register(user *model.User) (string, error) {
	userExists := usecase.userRepo.FindUserFromMail(user.Email)
	if userExists.ID != "" {
		return "", status.Errorf(codes.AlreadyExists, "The email already exist")
	}

	uid := usecase.userRepo.CreateUser(user)
	return uid, nil
}

func (usecase *authUsecase) Login(user *model.User) (string, error) {
	userCorrect := usecase.userRepo.FindUserFromMail(user.Email)
	if userCorrect.ID == "" {
		return "", status.Errorf(codes.Unauthenticated, "The user does not exist")
	}

	if err := bcrypt.CompareHashAndPassword(userCorrect.Password, user.Password); err != nil {
		return "", status.Errorf(codes.Unauthenticated, "Incorrect password")
	}

	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
		Issuer:    userCorrect.ID,
		ExpiresAt: time.Now().Add(time.Hour * 24).Unix(),
	})

	token, _ := claims.SignedString([]byte(os.Getenv("SECRET_TOKEN")))

	return token, nil
}

func (usecase *authUsecase) Delete(id string) error {
	usecase.userRepo.DeleteUser(id)
	return nil
}
