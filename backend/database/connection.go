package database

import (
	"backend/domain"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	user := os.Getenv("DB_USERNAME")
	pass := os.Getenv("DB_PASSWORD")
	protocol := "tcp(db:3306)"
	dbname := os.Getenv("DB_DATABASE")

	connection, err := gorm.Open(mysql.Open(user+":"+pass+"@"+protocol+"/"+dbname), &gorm.Config{})

	if err != nil {
		panic("could not connect to the database")
	}

	DB = connection

	if err := connection.AutoMigrate(&domain.User{}); err != nil {
		panic(err)
	}
}
