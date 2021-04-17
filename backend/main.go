package main

import (
	"log"
	"net"

	"backend/config"
	"backend/database"
)

const (
	port = ":9090"
)

func main() {
	database.Connect()

	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := config.CreateServer()

	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %c", err)
	}
}
