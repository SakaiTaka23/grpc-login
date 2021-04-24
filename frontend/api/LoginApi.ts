import { Dispatch, SetStateAction } from 'react';
import { LoginRequest } from '../proto/auth_pb';
import NewAuthServiceClient from './client/AuthServiceClient';

const LoginApi = (request: LoginRequest, setJWT: Dispatch<SetStateAction<string>>) => {
  NewAuthServiceClient()
    .login(request, {}, (err) => {
      console.log(err);
      return err;
    })
    .on('metadata', (metadata) => {
      console.log(metadata.jwt);
      setJWT(metadata.jwt);
    });
};

export default LoginApi;
