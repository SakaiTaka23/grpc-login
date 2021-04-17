package domain

import "github.com/google/uuid"

type User struct {
	ID       uuid.UUID `gorm:"type:uuid;primary_key;"`
	Email    string
	Name     string
	Password string
}
