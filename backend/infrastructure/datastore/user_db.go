package datastore

import (
	"backend/entity/model"
	"backend/entity/repository"
	"backend/infrastructure/datastore/mysql"
)

type UserRepository struct {
	mysql.MySQLHandler
}

func NewUserRepository(sqlHandler mysql.MySQLHandler) repository.UserRepository {
	userRepository := UserRepository{sqlHandler}
	return &userRepository
}

func (userRepo *UserRepository) CreateUser(user *model.User) string {
	userRepo.MySQLHandler.Conn.Create(&user)
	return user.ID
}

func (userRepo *UserRepository) DeleteUser(id string) {
	var user model.User
	userRepo.MySQLHandler.Conn.Where("id = ?", id).Delete(&user)
}

func (userRepo *UserRepository) FindUserFromID(id string) *model.User {
	var user model.User
	userRepo.MySQLHandler.Conn.Where("id = ?", id).First(&user)
	return &user
}

func (userRepo *UserRepository) FindUserFromMail(mail string) *model.User {
	var user model.User
	userRepo.MySQLHandler.Conn.Where("email = ?", mail).First(&user)
	return &user
}
