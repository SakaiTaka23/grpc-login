import { Avatar, Container, Grid, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import SubmitButton from '../components/molecules/SubmitButton';
import EmailInput from '../components/organisms/input/EmailInput';
import NameInput from '../components/organisms/input/NameInput';
import PasswordInput from '../components/organisms/input/PasswordInput';
import useRegister from '../hooks/useRegister';
import { registerForm } from '../types/FormType';

const Register = () => {
  const methods = useForm<registerForm>();
  const { err, onSubmit } = useRegister();

  console.log(err);

  return (
    <>
      {err ? <h1>{err.message}</h1> : ''}
      <Grid container direction='column' alignItems='center'>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>Sign in</Typography>
      </Grid>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid container direction='column' alignItems='center'>
            <EmailInput />
            <NameInput />
            <PasswordInput />
            <SubmitButton />
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default Register;
