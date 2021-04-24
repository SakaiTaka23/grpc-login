import { UserServiceClient } from '../../proto/UserServiceClientPb';
import { AuthInterceptor, host } from './authInterceptor';

const NewUserServiceClient = (token: string) => {
  const authInterceptor = new AuthInterceptor(token);
  const options = {
    unaryInterceptors: [authInterceptor],
    streamInterceptors: [authInterceptor],
  };
  const service = new UserServiceClient(host, null, options);

  return service;
};

export default NewUserServiceClient;
