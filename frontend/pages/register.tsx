import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import useRegister from '../hooks/useRegister';
import { register } from '../types/registerType';

const Register = () => {
  const { register, handleSubmit } = useForm<register>();
  const { onSubmit } = useRegister();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        variant='outlined'
        {...register('email', {
          required: true,
        })}
      />

      <TextField
        variant='outlined'
        {...register('name', {
          required: true,
          minLength: 1,
          maxLength: 20,
        })}
      />

      <TextField
        variant='outlined'
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
