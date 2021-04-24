import { Button } from '@material-ui/core';
import React from 'react';
import useDelete from '../hooks/useDelete';

const Delete = () => {
  const { requestDelete } = useDelete();

  return (
    <>
      <h1>Do You Really Want To Delete Account?</h1>
      <Button variant='outlined' onClick={() => requestDelete()}>
        Delete
      </Button>
    </>
  );
};

export default Delete;
