import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../types/loginType';

const Login = () => {
  const { register, handleSubmit } = useForm<login>();

  const onSubmit = (data: login) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        variant='outlined'
        placeholder='email'
        {...register('email', {
          required: true,
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
