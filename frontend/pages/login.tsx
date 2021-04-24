import { Button, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import LoginApi from '../api/LoginApi';
import { JWTContext } from '../context/jwtContext';
import { LoginRequest } from '../proto/auth_pb';
import { login } from '../types/loginType';

const Login = () => {
  const { setJWT } = useContext(JWTContext);
  const { register, handleSubmit } = useForm<login>();

  const onSubmit = (data: login) => {
    console.log(data);
    const request = new LoginRequest();
    request.setEmail(data.email);
    request.setPassword(data.password);
    const err = LoginApi(request, setJWT);
    console.log(err);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        variant='outlined'
        placeholder='email'
        {...register('email', {
          required: true,
          pattern: /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
        })}
      />

      <TextField
        variant='outlined'
        placeholder='password'
        {...register('password', {
          required: true,
          minLength: 8,
          maxLength: 16,
        })}
      />
      <Button type='submit' variant='outlined'>
        submit
      </Button>
    </form>
  );
};

export default Login;
