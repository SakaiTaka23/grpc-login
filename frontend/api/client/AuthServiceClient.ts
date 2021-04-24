import { AuthServiceClient } from '../../proto/AuthServiceClientPb';
import { AuthInterceptor, host } from './authInterceptor';

const NewAuthServiceClient = (token = '') => {
  const authInterceptor = new AuthInterceptor(token);
  const options = {
    unaryInterceptors: [authInterceptor],
    streamInterceptors: [authInterceptor],
  };
  const service = new AuthServiceClient(host, null, options);

  return service;
};

export default NewAuthServiceClient;
