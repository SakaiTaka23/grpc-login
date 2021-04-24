import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import useLogin from '../hooks/useLogin';
import { loginForm } from '../types/FormType';

const Login = () => {
  const { err, onSubmit } = useLogin();
  const { register, handleSubmit } = useForm<loginForm>();

  return (
    <>
      {err ? <h1>メールもしくはパスワードが違います。</h1> : ''}
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
    </>
  );
};

export default Login;
