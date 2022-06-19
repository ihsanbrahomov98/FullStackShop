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
import SeacrhInput from './SearchInput';

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
      <Stack>
        <Stack
          position={'relaitve'}
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
          back
          sx={{ height: 55 }}
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
              <SeacrhInput></SeacrhInput>
            </Box>
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
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        spacing={2}
        sx={{ height: 25, bgcolor: 'text.disabled' }}
      >
        <Box>
          <Link to="/products/all">Всички обувки</Link>
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
    </>
  );
};

export default Navbar;
