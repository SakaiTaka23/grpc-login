import { AuthServiceClient } from '../proto/AuthServiceClientPb';
import { AuthInterceptor, host } from './authInterceptor';

const authInterceptor = new AuthInterceptor('token');
const options = {
  unaryInterceptors: [authInterceptor],
  streamInterceptors: [authInterceptor],
};
const service = new AuthServiceClient(host, null, options);

export default service;
