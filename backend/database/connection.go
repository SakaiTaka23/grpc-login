package database

import (
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	connection, err := gorm.Open(mysql.Open(os.Getenv("DB_USERNAME")+":"+os.Getenv("DB_PASSWORD")+"@"+"tcp(127.0.0.1:3306)/"+os.Getenv("DB_DATABASE")), &gorm.Config{})

	if err != nil {
		panic("could not connect to the database")
	}

	DB = connection
}
