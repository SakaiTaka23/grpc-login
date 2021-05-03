import { AppBar, createStyles, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';
import { useJWT } from '../../../hooks/useJWT';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
);

const NavBar = () => {
  const classes = useStyles();
  const { isLoggedIn } = useJWT();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            gRPC-Login
          </Typography>
          {isLoggedIn ? (
            <Link href='/user'>
              <a>User</a>
            </Link>
          ) : (
            <>
              <Link href='/login'>
                <a>Login</a>
              </Link>
              <Link href='/register'>
                <a>Register</a>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
