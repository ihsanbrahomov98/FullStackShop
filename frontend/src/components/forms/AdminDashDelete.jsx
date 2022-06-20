import React from 'react';
import { Button, Box } from '@mui/material';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import AdminNav from './AdminNav';
import Typography from '@mui/material/Typography';
import CopywritingLine from '../CopywritingLine';
import Container from '@mui/material/Container';
const AdminDashDelete = () => {
  const deleteAll = () => {
    axios.delete('/back/mock/api/delete');
  };
  return (
    <>
      <AdminNav />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ flex: 1, height: 650 }}
      >
        <Typography variant="h4">
          Be Carefull This Button Deletes All Items From Data Base
        </Typography>
        <Button variant="contained" onClick={deleteAll}>
          DELETE ALL PRODUCT!!!
        </Button>
      </Stack>

      <CopywritingLine />
    </>
  );
};

export default AdminDashDelete;
