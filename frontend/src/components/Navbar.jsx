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
import {
  AppbarHeaderSansSerif30,
  AppbarHeader,
  BottomNavListItems,
} from './styles/TopNav';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SearchIcon from '@mui/icons-material/Search';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Colors } from './styles/theme';
import HamburgerMenu from './HamburgerMenu';

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
          justifyContent={{ xs: 'center', thousand: 'space-between' }}
          alignItems="center"
          spacing={2}
          back
          sx={{ height: 65, pl: 3, pr: 3 }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
            sx={{ display: { xs: 'none', thousand: 'flex' } }}
          >
            <Link to="/products/man" style={{ textDecoration: 'none' }}>
              <AppbarHeaderSansSerif30>МЪЖЕ </AppbarHeaderSansSerif30>
            </Link>
            <Link to="/products/woman" style={{ textDecoration: 'none' }}>
              <AppbarHeaderSansSerif30>ЖЕНИ </AppbarHeaderSansSerif30>
            </Link>
            <Link to="/products/child" style={{ textDecoration: 'none' }}>
              <AppbarHeaderSansSerif30>ДЕТЕ </AppbarHeaderSansSerif30>
            </Link>
            <Link to="/products/accessories" style={{ textDecoration: 'none' }}>
              <AppbarHeaderSansSerif30>АКСЕСОАРИ </AppbarHeaderSansSerif30>
            </Link>
            <Link to="/products/sport" style={{ textDecoration: 'none' }}>
              <AppbarHeaderSansSerif30>СПОРТ </AppbarHeaderSansSerif30>
            </Link>
          </Stack>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Link to="/" style={{ textDecoration: 'none' }}>
                {' '}
                <AppbarHeader>КОНТЕ</AppbarHeader>{' '}
              </Link>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 0, thousand: 2 }}
          >
            <Box>
              <AppbarHeaderSansSerif30
                sx={{ display: { xs: 'none', thousand: 'flex' } }}
              ></AppbarHeaderSansSerif30>
              <IconButton
                sx={{ display: { xs: 'none', thousand: 'flex' } }}
                aria-label="cart"
              >
                <StyledBadge badgeContent={cartTotal} color="secondary">
                  <Link to="/adminboard">
                    <SearchIcon color="secondary" />
                  </Link>
                </StyledBadge>
              </IconButton>
            </Box>
            <Box>
              <AppbarHeaderSansSerif30
                sx={{ display: { xs: 'none', thousand: 'flex' } }}
              ></AppbarHeaderSansSerif30>
              <IconButton
                sx={{ display: { xs: 'none', thousand: 'flex' } }}
                aria-label="cart"
              >
                <StyledBadge badgeContent={cartTotal} color="secondary">
                  <Link to="/cartpage">
                    <CallIcon color="secondary" />
                  </Link>
                </StyledBadge>
              </IconButton>
            </Box>
            <Box>
              <AppbarHeaderSansSerif30
                sx={{ display: { xs: 'none', thousand: 'flex' } }}
              ></AppbarHeaderSansSerif30>
              <IconButton
                sx={{ display: { xs: 'none', thousand: 'flex' } }}
                aria-label="cart"
              >
                <Link to="/cartpage">
                  <AccountBoxRoundedIcon
                    badgeContent={cartTotal}
                    color="secondary"
                  ></AccountBoxRoundedIcon>
                </Link>
              </IconButton>
            </Box>
            <Box>
              <AppbarHeaderSansSerif30
                sx={{ display: { xs: 'none', thousand: 'flex' } }}
              ></AppbarHeaderSansSerif30>
              <IconButton
                sx={{ display: { xs: 'none', thousand: 'flex' } }}
                aria-label="cart"
              >
                <StyledBadge badgeContent={cartTotal} color="secondary">
                  <Link to="/cartpage">
                    <StarBorderIcon color="secondary"></StarBorderIcon>
                  </Link>
                </StyledBadge>
              </IconButton>
            </Box>

            <Box>
              <AppbarHeaderSansSerif30
                sx={{ display: { xs: 'none', thousand: 'flex' } }}
              ></AppbarHeaderSansSerif30>
              <IconButton
                sx={{ display: { xs: 'none', thousand: 'flex' } }}
                aria-label="cart"
              >
                <StyledBadge badgeContent={cartTotal} color="secondary">
                  <Link to="/cartpage">
                    <InfoOutlinedIcon color="secondary" />
                  </Link>
                </StyledBadge>
              </IconButton>
            </Box>
            <Box>
              <AppbarHeaderSansSerif30
                sx={{ display: { xs: 'none', thousand: 'flex' } }}
              ></AppbarHeaderSansSerif30>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={cartTotal} color="secondary">
                  <Link to="/cartpage">
                    <ShoppingCartIcon color="secondary" />
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
        alignItems="center"
        spacing={2}
        sx={{
          height: 53,
          bgcolor: Colors.black,
          display: { xs: 'none', thousand: 'flex' },
        }}
      >
        <Box>
          <Link
            to="/products/all"
            style={{
              textDecoration: 'none',
            }}
          >
            <BottomNavListItems
              style={{ textDecoration: 'none' }}
              sx={{
                '&:hover': {
                  color: Colors.orange,
                },
              }}
            >
              ВСИЧКИ АРТИКУЛИ{' '}
            </BottomNavListItems>
          </Link>
        </Box>
        <Box>
          <Link to="/products/man" style={{ textDecoration: 'none' }}>
            <BottomNavListItems
              style={{ textDecoration: 'none' }}
              sx={{
                '&:hover': {
                  color: Colors.orange,
                },
              }}
            >
              МЪЖЕ{' '}
            </BottomNavListItems>
          </Link>
        </Box>
        <Box>
          <Link to="/products/woman" style={{ textDecoration: 'none' }}>
            <BottomNavListItems
              style={{ textDecoration: 'none' }}
              sx={{
                '&:hover': {
                  color: Colors.orange,
                },
              }}
            >
              ЖЕНИ
            </BottomNavListItems>
          </Link>
        </Box>
        <Box>
          <Link to="/products/child" style={{ textDecoration: 'none' }}>
            <BottomNavListItems
              style={{ textDecoration: 'none' }}
              sx={{
                '&:hover': {
                  color: Colors.orange,
                },
              }}
            >
              ДЕТЕ{' '}
            </BottomNavListItems>
          </Link>
        </Box>
        <Box>
          <Link to="/products/accessories" style={{ textDecoration: 'none' }}>
            <BottomNavListItems
              style={{ textDecoration: 'none' }}
              sx={{
                '&:hover': {
                  color: Colors.orange,
                },
              }}
            >
              {' '}
              АКСЕСОАРИ{' '}
            </BottomNavListItems>
          </Link>
        </Box>
        <Box>
          <Link to="/products/sport" style={{ textDecoration: 'none' }}>
            <BottomNavListItems
              style={{ textDecoration: 'none' }}
              sx={{
                '&:hover': {
                  color: Colors.orange,
                },
              }}
            >
              СПОРТНИ
            </BottomNavListItems>
          </Link>
        </Box>
      </Stack>
      <Stack
        direction="row"
        sx={{
          display: { xs: 'flex', thousand: 'none' },
        }}
      >
        <HamburgerMenu />
      </Stack>
    </>
  );
};

export default Navbar;
