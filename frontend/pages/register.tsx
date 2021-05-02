import { Avatar, Container, CssBaseline, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import SubmitButton from '../components/molecules/SubmitButton';
import EmailInput from '../components/organisms/input/EmailInput';
import NameInput from '../components/organisms/input/NameInput';
import PasswordInput from '../components/organisms/input/PasswordInput';
import useRegister from '../hooks/useRegister';
import { registerForm } from '../types/FormType';

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

const Register = () => {
  const classes = useStyles();
  const methods = useForm<registerForm>();
  const { err, onSubmit } = useRegister();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        {/* modify */}
        {err ? <h1>{err.message}</h1> : ''}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className={classes.form}>
            <EmailInput />
            <NameInput />
            <PasswordInput />
            <SubmitButton />
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </div>
    </Container>
  );
};

export default Register;
