import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useDelete from '../hooks/useDelete';

const Delete = () => {
  const [token, setToken] = useState<string | null>(null);
  const { requestDelete } = useDelete();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    setToken(token);
  }, []);

  return (
    <>
      <h1>Do You Really Want To Delete Account?</h1>
      <Button variant='outlined' onClick={() => requestDelete(token)}>
        Delete
      </Button>
    </>
  );
};

export default Delete;
