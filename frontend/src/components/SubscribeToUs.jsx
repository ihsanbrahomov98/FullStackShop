import React from 'react';
import {
  Button,
  CardActionArea,
  CardActions,
  Typography,
  Box,
} from '@mui/material';

import Stack from '@mui/material/Stack';
import { Colors } from './styles/theme';
import { ShopAddButton } from './styles/SingleProductMain';
import { Link } from 'react-router-dom';
import { AppbarHeaderSansSerif30 } from './styles/TopNav';
import {
  SubscribeToUsTypography,
  SubscribeToUsTypographyLigherBlack,
} from './styles/SubscribeToUsStyled';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { grey } from '@mui/material/colors';

import TextField from '@mui/material/TextField';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SubscribeToUs = () => {
  return (
    <Container sx={{ height: 400, backgroundColor: Colors.grayForSub }}>
      <Stack
        sx={{ height: 400 }}
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
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
            sx={{
              color: Colors.black,
              '&.Mui-checked': {
                color: Colors.black,
              },
            }}
          />
          <ShopAddButton>ВХОД</ShopAddButton>
        </Stack>
        <Stack>4</Stack>
        <Stack>5</Stack>
      </Stack>
    </Container>
  );
};

export default SubscribeToUs;
