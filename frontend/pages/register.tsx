import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import useRegister from '../hooks/useRegister';
import { registerForm } from '../types/FormType';

const Register = () => {
  const { register, handleSubmit } = useForm<registerForm>();
  const { onSubmit } = useRegister();

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
        placeholder='name'
        {...register('name', {
          required: true,
          minLength: 1,
          maxLength: 20,
        })}
      />

      <TextField
        variant='outlined'
        placeholder='password'
        {...register('password', {
          required: true,
          minLength: 8,
          maxLength: 20,
        })}
      />
      <Button type='submit' variant='outlined'>
        submit
      </Button>
    </form>
  );
};

export default Register;
