import React from 'react';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import { Colors } from '../styles/theme';
import { Button, CardActionArea, CardActions, Typography } from '@mui/material';

const AdminNav = () => {
  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      spacing={2}
      sx={{ height: 65, bgcolor: Colors.adminNavbar }}
    >
      <Box>
        <IconButton
          aria-label="cart"
          sx={{ color: Colors.white }}
          style={{ textDecoration: 'none' }}
        >
          <Link
            to="/"
            sx={{ color: Colors.white }}
            style={{ textDecoration: 'none' }}
          >
            <HomeIcon
              sx={{ color: Colors.white, '&:hover': { color: Colors.orange } }}
              style={{ textDecoration: 'none' }}
            />
          </Link>
        </IconButton>
      </Box>
      <Box>
        <Link
          sx={{
            color: Colors.white,
            '&:hover': { color: Colors.orange },
          }}
          style={{ textDecoration: 'none' }}
          to="/admin/create"
        >
          <Typography
            sx={{
              color: Colors.white,
              '&:hover': { color: Colors.orange },
            }}
          >
            Създавана на Продукт
          </Typography>
        </Link>
      </Box>
      <Box>
        <Link style={{ textDecoration: 'none' }} to="/admin/delete">
          <Typography
            sx={{
              color: Colors.white,
              '&:hover': { color: Colors.orange },
            }}
          >
            Изтриване на Продукт
          </Typography>
        </Link>
      </Box>
      <Box>
        <Link style={{ textDecoration: 'none' }} to="/admin/deleteall">
          <Typography
            sx={{
              color: Colors.white,
              '&:hover': { color: Colors.orange },
            }}
          >
            Изтриване на Всички Продукти
          </Typography>
        </Link>
      </Box>
      <Box>
        <Link style={{ textDecoration: 'none' }} to="/admin/update">
          <Typography
            sx={{
              color: Colors.white,
              '&:hover': { color: Colors.orange },
            }}
          >
            Редактиране на Продукти
          </Typography>
        </Link>
      </Box>

      <Box>
        <Link style={{ textDecoration: 'none' }} to="/products/all">
          <Typography
            sx={{
              color: Colors.white,
              '&:hover': { color: Colors.orange },
            }}
          >
            Всички продукти
          </Typography>
        </Link>
      </Box>
    </Stack>
  );
};

export default AdminNav;
