import React from 'react';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

const AdminNav = () => {
  return (
    <Stack
      width="100%"
      position="fixed"
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      spacing={2}
      sx={{ height: 55, bgcolor: 'info.main' }}
    >
      <Box>
        <Link to="/admin/create">Създавана на Продукт</Link>
      </Box>
      <Box>
        <Link to="/products/man">Мъжки обувки</Link>
      </Box>
      <Box>
        <Link to="/products/woman">Дамски обувки</Link>
      </Box>
      <Box>
        <Link to="/products/child">Детски обувки</Link>
      </Box>
      <Box>
        <Link to="/products/accessories">Аксесоари</Link>
      </Box>
      <Box>
        <Link to="/products/sport">Спротни Обувки</Link>
      </Box>
    </Stack>
  );
};

export default AdminNav;
