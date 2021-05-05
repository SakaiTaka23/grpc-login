import { Avatar, Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';
import SubmitButton from '../components/molecules/SubmitButton';
import EmailInput from '../components/organisms/input/EmailInput';
import PasswordInput from '../components/organisms/input/PasswordInput';
import useLogin from '../hooks/useLogin';
import { loginForm } from '../types/FormType';
import useNotLogin from '../hooks/useRequiredLogin';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  useNotLogin();
  const classes = useStyles();
  const methods = useForm<loginForm>();
  const { err, onSubmit } = useLogin();

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          LogIn
        </Typography>
        {/* modify */}
        {err ? <h1>{err.message}</h1> : ''}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className={classes.form}>
            <EmailInput />
            <PasswordInput />
            <SubmitButton />
            <Grid container justify='flex-end'>
              <Grid item>
                <Link href='/register' passHref>
                  <Button component='a'>Don't have an account? Sign Up</Button>
                </Link>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </div>
    </Container>
  );
};

export default Login;
