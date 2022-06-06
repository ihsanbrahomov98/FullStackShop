import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    border: `2px solid ${theme.palette.background.paper}`,
  },
}));

const Navbar = () => {
  const cartTotal = useSelector((state) => state.cart.quantity);
  console.log(cartTotal);

  const dispatch = useDispatch();
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={2}
        back
        sx={{ height: 55, bgcolor: 'primary.main' }}
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <IconButton aria-label="cart">
            <Link to="/">
              <HomeIcon />
            </Link>
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
          sx={{ pt: 1.4, pl: 4.7 }}
        >
          <Box>
            <CallIcon />
          </Box>
          <Box sx={{ pt: 0.4 }}>0893231212</Box>
        </Stack>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <Box sx={{ pt: 1.6 }}>Register</Box>
          <Box>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cartTotal} color="secondary">
                <Link to="/adminboard">
                  <AccountBoxRoundedIcon />
                </Link>
              </StyledBadge>
            </IconButton>
          </Box>
          <Box sx={{ pr: 1.2 }}>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cartTotal} color="secondary">
                <Link to="/cartpage">
                  <ShoppingCartIcon />
                </Link>
              </StyledBadge>
            </IconButton>
          </Box>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        spacing={2}
        sx={{ height: 25, bgcolor: 'primary.main' }}
      >
        <Box>
          <Link to="/products/man">Всички обувки</Link>
        </Box>
        <Box>
          <Link to="/products/man">Мъжки обувки</Link>
        </Box>
        <Box>
          <Link to="/products/man">Дамски обувки</Link>
        </Box>
        <Box>
          <Link to="/products/man">Детски обувки</Link>
        </Box>
        <Box>
          <Link to="/products/man">Аксесоари</Link>
        </Box>
        <Box>
          <Link to="/products/man">Спротни Обувки</Link>
        </Box>
      </Stack>
    </>
  );
};

export default Navbar;
