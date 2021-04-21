package datastore

import (
	"backend/entity/model"
	"backend/entity/repository"
	"backend/infrastructure/datastore/mysql"
)

type UserRepository struct {
	mysql.MySqlHandler
}

func NewUserRepository(sqlHandler mysql.MySqlHandler) repository.UserRepository {
	userRepository := UserRepository{sqlHandler}
	return &userRepository
}

func (userRepo *UserRepository) CreateUser(user *model.User) string {
	userRepo.MySqlHandler.Conn.Create(&user)
	return user.ID
}

func (userRepo *UserRepository) DeleteUser(id string) {
	var user model.User
	userRepo.MySqlHandler.Conn.Where("id = ?", id).Delete(&user)
}

func (userRepo *UserRepository) FindUserFromId(id string) *model.User {
	var user model.User
	userRepo.MySqlHandler.Conn.Where("id = ?", id).First(&user)
	return &user
}

func (userRepo *UserRepository) FindUserFromMail(mail string) *model.User {
	var user model.User
	userRepo.MySqlHandler.Conn.Where("email = ?", mail).First(&user)
	return &user
}
