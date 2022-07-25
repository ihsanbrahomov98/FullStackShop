import React from 'react';
import { Button, Box } from '@mui/material';
import { axiosInstance } from '../../config';
import Stack from '@mui/material/Stack';
import AdminNav from './AdminNav';
import Typography from '@mui/material/Typography';
import CopywritingLine from '../CopywritingLine';
import Container from '@mui/material/Container';
import { Colors } from '../styles/theme';
import FixedCricles from '../FixedCricles';
const AdminDashDelete = () => {
  const deleteAll = () => {
    axiosInstance.delete('/back/mock/api/delete');
  };

  return (
    <>
      <AdminNav />
      <FixedCricles />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ flex: 1, height: 420 }}
      >
        <Typography
          sx={{
            fontSize: 30,
            fontWeight: 'bold',
          }}
          align="center"
          variant="h3"
        >
          Изтриване на всички продукти
        </Typography>
        <Button
          onClick={deleteAll}
          color="primary"
          size="large"
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: Colors.orange,
            '&:hover': {
              backgroundColor: Colors.orangeForCartHover,
            },
          }}
        >
          Изтриване на продуктите
        </Button>
      </Stack>

      <CopywritingLine />
      <Stack sx={{ height: 45 }}> </Stack>
    </>
  );
};

export default AdminDashDelete;
