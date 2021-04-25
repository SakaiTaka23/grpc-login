import { Error } from 'grpc-web';
import { useState } from 'react';
import NewAuthServiceClient from '../api/AuthServiceClient';
import { RegisterRequest } from '../proto/auth_pb';
import { registerForm } from '../types/FormType';

const useRegister = () => {
  const [err, setErr] = useState<Error>();

  const onSubmit = (data: registerForm) => {
    console.log(data);
    sendInfo(data);
  };

  const sendInfo = ({ email, name, password }: registerForm) => {
    const request = new RegisterRequest();
    request.setEmail(email);
    request.setName(name);
    request.setPassword(password);

    NewAuthServiceClient().register(request, {}, (err, res) => {
      if (err) {
        setErr(err);
      } else {
        console.log(res.getUid());
        setErr(null);
      }
    });
  };

  return { err, onSubmit };
};

export default useRegister;
