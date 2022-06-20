import React from 'react';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';

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
        <IconButton aria-label="cart">
          <Link to="/">
            <HomeIcon />
          </Link>
        </IconButton>
      </Box>
      <Box>
        <Link to="/admin/create">Създавана на Продукт</Link>
      </Box>
      <Box>
        <Link to="/admin/delete">Изтриване на Продукти</Link>
      </Box>
      <Box>
        <Link to="/admin/deleteall">Изтриване на Всички Продукти</Link>
      </Box>
      <Box>
        <Link to="/admin/update">Редактиране на Продукти</Link>
      </Box>
      <Box>
        <Link to="/products/accessories">Аксесоари</Link>
      </Box>
    </Stack>
  );
};

export default AdminNav;
