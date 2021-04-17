package database

import (
	"backend/domain"
)

func CreateUser(user *domain.User) string {
	DB.Create(&user)
	return user.ID
}

func FindUserFromMail(mail string) *domain.User {
	var user domain.User
	DB.Where("email = ?", mail).First(&user)
	return &user
}
