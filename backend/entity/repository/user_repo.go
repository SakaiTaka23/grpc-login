package repository

import (
	"backend/entity/model"
)

type UserRepository interface {
	CreateUser(user *model.User) string
	DeleteUser(id string)
	FindUserFromID(id string) *model.User
	FindUserFromMail(mail string) *model.User
}
