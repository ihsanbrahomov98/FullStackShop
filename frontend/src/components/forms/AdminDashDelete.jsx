import React from 'react';
import { Button, Box } from '@mui/material';
import axios from 'axios';
import Stack from '@mui/material/Stack';

const AdminDashDelete = () => {
  const deleteAll = () => {
    axios.delete('/back/mock/api/delete');
  };
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
      >
        <Button variant="outlined" onClick={deleteAll}>
          DELETE ALL PRODUCT!!!
        </Button>
      </Stack>
    </>
  );
};

export default AdminDashDelete;
