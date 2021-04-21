package repository

import (
	"backend/entity/model"
)

type UserRepository interface {
	CreateUser(user *model.User) string
	FindUserFromMail(mail string) *model.User
	DeleteUser(id string)
}
