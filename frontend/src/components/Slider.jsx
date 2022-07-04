import * as React from 'react';

import { Container } from '@mui/system';
import { Colors } from './styles/theme';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { Stack } from '@mui/material';

function Slider() {
  return (
    <Container>
      {' '}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: 500 }}
      >
        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
          flex={2}
        >
          <Stack>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://cdn.shopify.com/s/files/1/0491/6432/0923/files/Shoe-Shop_SS22_Push-Box_800x520_FINBAL_25_800x.gif?v=1651736994"
                alt="Paella dish"
                sx={{
                  '&:hover': {
                    transform: 'scale3d(1.15, 1.15, 1.1)',
                  },
                }}
              />
            </Card>
          </Stack>
          <Stack>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="  https://cdn.shopify.com/s/files/1/0491/6432/0923/files/Shoe-Shop_SS22_Push-Box_800x520_FINAL_50_800x.gif?v=1651737065"
                alt="Paella dish"
                sx={{
                  '&:hover': {
                    transform: 'scale3d(1.15, 1.15, 1.1)',
                  },
                }}
              />
            </Card>
          </Stack>
        </Stack>

        <Stack justifyContent="center" alignItems="center" flex={2}>
          <Stack>
            <Card>
              <CardMedia
                component="img"
                height="425"
                image="   https://cdn.shopify.com/s/files/1/0491/6432/0923/files/Shoe-Shop_SS22_Push-Box_1100x1100_2_1000x.gif?v=1652085700"
                alt="Paella dish"
                sx={{
                  '&:hover': {
                    transform: 'scale3d(1.15, 1.15, 1.1)',
                  },
                }}
              />
            </Card>
          </Stack>
        </Stack>

        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
          flex={2}
        >
          <Stack>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://cdn.shopify.com/s/files/1/0491/6432/0923/files/Shoe-Shop_SS22_Push-Box_800x520_FINBAL_25_800x.gif?v=1651736994"
                alt="Paella dish"
                sx={{
                  '&:hover': {
                    transform: 'scale3d(1.15, 1.15, 1.1)',
                  },
                }}
              />
            </Card>
          </Stack>
          <Stack>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="  https://cdn.shopify.com/s/files/1/0491/6432/0923/files/Shoe-Shop_SS22_Push-Box_800x520_FINAL_50_800x.gif?v=1651737065"
                alt="Paella dish"
                sx={{
                  '&:hover': {
                    transform: 'scale3d(1.15, 1.15, 1.1)',
                  },
                }}
              />
            </Card>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Slider;
