package injector

import (
	"backend/entity/repository"
	"backend/handler/grpchandler"
	"backend/infrastructure/datastore"
	"backend/infrastructure/datastore/mysql"
	"backend/usecase"
)

func InjectDB() mysql.MySQLHandler {
	sqlHandler := mysql.Connect()
	return *sqlHandler
}

func InjectUserRepository() repository.UserRepository {
	sqlHandler := InjectDB()
	return datastore.NewUserRepository(sqlHandler)
}

func InjectUserUsecase() usecase.UserUsecase {
	UserRepo := InjectUserRepository()
	return usecase.NewUserUsecase(UserRepo)
}

func InjectAuthUsecase() usecase.AuthUsecase {
	UserRepo := InjectUserRepository()
	return usecase.NewAuthUsecase(UserRepo)
}

func InjectUserHandler() grpchandler.UserHandler {
	return grpchandler.NewUserHandler(InjectUserUsecase())
}

func InjectAuthHandler() grpchandler.AuthHandler {
	return grpchandler.NewAuthHandler(InjectAuthUsecase())
}
