import React from 'react';
import {
  Button,
  CardActionArea,
  CardActions,
  Typography,
  Box,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { Colors } from './styles/theme';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import { AppbarHeaderSansSerif30 } from './styles/TopNav';
import {
  SubscribeToUsTypography,
  SubscribeToUsTypographyLigherBlack,
  ShopAddButton,
} from './styles/SubscribeToUsStyled';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { grey } from '@mui/material/colors';
import InstagramIcon from '@mui/icons-material/Instagram';

import TextField from '@mui/material/TextField';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SubscribeToUs = () => {
  return (
    <Container sx={{ height: 350, backgroundColor: Colors.grayForSub }}>
      <Stack
        sx={{ height: 350 }}
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <Stack></Stack>
        <Stack></Stack>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <SubscribeToUsTypography>
            {' '}
            Абонирайте се за нашия бюлетин {'  '}
          </SubscribeToUsTypography>

          <span> &nbsp; </span>
          <SubscribeToUsTypographyLigherBlack>
            {' '}
            и получавайте като първи информация за промоции и нови продукти
          </SubscribeToUsTypographyLigherBlack>
        </Stack>
        <Stack direction="row" justifyContent="center" alignItems="center">
          {' '}
          <AppbarHeaderSansSerif30> ДАМСКА КОЛЕКЦИЯ</AppbarHeaderSansSerif30>
          <Checkbox
            {...label}
            sx={{
              color: Colors.black,
              '&.Mui-checked': {
                color: Colors.black,
              },
            }}
          />
          <AppbarHeaderSansSerif30> МЪЖКА КОЛЕКЦИЯ</AppbarHeaderSansSerif30>
          <Checkbox
            {...label}
            sx={{
              color: Colors.black,

              '&.Mui-checked': {
                color: Colors.black,
              },
            }}
          />
        </Stack>
        <Stack direction="row">
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            InputLabelProps={{
              style: { color: Colors.black },
            }}
            sx={{
              color: Colors.black,
              height: '100%',
              width: 500,
              '& .MuiInputLabel-root': { color: Colors.black },
              '& .MuiOutlinedInput-root': {
                '& > fieldset': { borderColor: Colors.black },
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: Colors.black,
                },
              '&.Mui-checked': {
                color: Colors.black,
              },
            }}
          />
          <ShopAddButton>ВХОД</ShopAddButton>
        </Stack>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Checkbox
            {...label}
            size="small"
            sx={{
              color: Colors.black,
              '&.Mui-checked': {
                color: Colors.black,
              },
            }}
          />
          <Typography
            sx={{ fontSize: 12 }}
            align="center"
            variant="body2"
            color="text.secondary"
          >
            Искам да получавам на въведения имейл адрес информация от ihsan.bg
            за най-нови колекции и оферти.
          </Typography>
          <Link to="/products/man">
            <Typography
              sx={{ fontSize: 14 }}
              align="center"
              variant="body2"
              color="text.secondary"
            >
              Повече
            </Typography>
          </Link>
        </Stack>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <IconButton aria-label="cart">
            <Link to="/adminboard">
              <FacebookIcon color="secondary" />
            </Link>
          </IconButton>
          <IconButton aria-label="cart">
            <Link to="/adminboard">
              <InstagramIcon color="secondary" />
            </Link>
          </IconButton>
        </Stack>
        <Stack></Stack>
      </Stack>
    </Container>
  );
};

export default SubscribeToUs;
