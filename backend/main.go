package main

import (
	"log"
	"net"

	"backend/infrastructure/datastore/mysql"
	"backend/infrastructure/server"
)

const (
	port = ":9090"
)

func main() {
	mysql.Connect()

	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := server.Create()
	s = server.SetRouter(s)

	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %c", err)
	}
}
