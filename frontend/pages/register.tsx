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
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <EmailInput />

          <NameInput />

          <PasswordInput />
          <SubmitButton />
        </form>
      </FormProvider>
    </>
  );
};

export default Register;
