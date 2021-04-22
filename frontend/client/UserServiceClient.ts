import { UserServiceClient } from '../proto/UserServiceClientPb';
import { AuthInterceptor, host } from './authInterceptor';

const authInterceptor = new AuthInterceptor('token');
const options = {
  unaryInterceptors: [authInterceptor],
  streamInterceptors: [authInterceptor],
};
const service = new UserServiceClient(host, null, options);

export default service;
