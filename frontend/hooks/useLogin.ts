import { Error } from 'grpc-web';
import { useContext, useState } from 'react';
import NewAuthServiceClient from '../api/AuthServiceClient';
import { JWTContext } from '../context/jwtContext';
import { LoginRequest } from '../proto/auth_pb';
import { loginForm } from '../types/FormType';

const useLogin = () => {
  const [err, setErr] = useState<Error>();
  const { setJWT } = useContext(JWTContext);

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
