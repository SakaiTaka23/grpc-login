import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import SubmitButton from '../components/molecules/SubmitButton';
import EmailInput from '../components/organisms/input/EmailInput';
import PasswordInput from '../components/organisms/input/PasswordInput';
import useLogin from '../hooks/useLogin';
import { loginForm } from '../types/FormType';

const Login = () => {
  const { err, onSubmit } = useLogin();
  const methods = useForm<loginForm>();

  return (
    <>
      {err ? <h1>{err.message}</h1> : ''}

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <EmailInput />

          <PasswordInput />

          <SubmitButton />
        </form>
      </FormProvider>
    </>
  );
};

export default Login;
