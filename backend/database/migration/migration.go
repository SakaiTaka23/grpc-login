package main

import (
	"backend/database"
	"backend/domain"
)

func main() {
	_ = database.DB.AutoMigrate(&domain.User{})
}
