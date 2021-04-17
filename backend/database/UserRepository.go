package database

import (
	"backend/domain"
)

func CreateUser(user *domain.User) string {
	DB.Create(&user)
	return user.ID
}
