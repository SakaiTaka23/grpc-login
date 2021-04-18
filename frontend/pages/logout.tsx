import { Button } from '@material-ui/core';
import React from 'react';

const Logout = () => {
  const deleteToken = () => {
    localStorage.removeItem('jwt');
  };

  return (
    <>
      <h1>Do You Really Want To Logout?</h1>
      <Button variant='outlined' onClick={() => deleteToken()}>
        Logout
      </Button>
    </>
  );
};

export default Logout;
