import { AuthServiceClient } from '../../proto/AuthServiceClientPb';
import { AuthInterceptor, host } from './authInterceptor';

const NewAuthServiceClient = () => {
  const authInterceptor = new AuthInterceptor('');
  const options = {
    unaryInterceptors: [authInterceptor],
    streamInterceptors: [authInterceptor],
  };
  const service = new AuthServiceClient(host, null, options);

  return service;
};

export default NewAuthServiceClient;
