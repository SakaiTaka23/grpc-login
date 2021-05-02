import { AppBar, createStyles, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            gRPC-Login
          </Typography>
          <Link href='#'>
            <a>Login</a>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
