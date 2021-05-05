import { Error } from 'grpc-web';
import { useRouter } from 'next/router';
import { useState } from 'react';
import NewAuthServiceClient from '../api/AuthServiceClient';
import { LoginRequest } from '../proto/auth_pb';
import { loginForm } from '../types/FormType';
import { useJWT } from './useJWT';
import useNotLogin from './useNotLogin';

const useLogin = () => {
  useNotLogin();
  const router = useRouter();
  const [err, setErr] = useState<Error>();
  const { setJWT } = useJWT();

  const onSubmit = (data: loginForm) => {
    console.log(data);
    LoginApi(data);
  };

  const LoginApi = ({ email, password }: loginForm) => {
    const request = new LoginRequest();
    request.setEmail(email);
    request.setPassword(password);
    NewAuthServiceClient()
      .login(request, {}, (err) => {
        if (err) {
          setErr(err);
        } else {
          setErr(null);
          router.push('/user');
        }
      })
      .on('metadata', (metadata) => {
        console.log(JSON.stringify(metadata));
        setJWT(metadata.jwt);
      });
  };

  return { err, onSubmit };
};

export default useLogin;
