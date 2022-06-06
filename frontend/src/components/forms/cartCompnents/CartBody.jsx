import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CartBody = () => {
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ height: 800 }}
      >
        <Stack sx={{ flex: 0.1 }}>
          <Typography variant="h4">YOUR BAG</Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ flex: 1, width: '100%' }}
        >
          <Stack sx={{ ml: 5 }}>
            <Stack>
              <Button>COUTINIUE SHOPPING </Button>
            </Stack>
          </Stack>
          <Stack direction="row">
            <Stack>
              <Button>COUTINIUE SHOPPING </Button>
            </Stack>
            <Stack>
              <Button>COUTINIUE SHOPPING </Button>
            </Stack>
          </Stack>
          <Stack>
            <Stack sx={{ mr: 5 }}>
              <Button>COUTINIUE SHOPPING </Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
          sx={{ flex: 6, width: '100%' }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={{ flex: 5 }}
          >
            <Stack>bob</Stack>
            <Stack>bob</Stack>
            <Stack>bob</Stack>
          </Stack>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ flex: 1.7, width: '100%', pr: 2 }}
          >
            <Typography variant="h4">ORDER SUMMARY</Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              sx={{ width: '100%' }}
            >
              <Typography>Subtotal:</Typography>
              <Typography>80 лв</Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              sx={{ width: '100%' }}
            >
              <Typography>Shipping cost:</Typography>
              <Typography>6 лв</Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              sx={{ width: '100%' }}
            >
              <Typography>Shipping discount:</Typography>
              <Typography>0 лв</Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              sx={{ width: '100%' }}
            >
              <Typography>Total</Typography>
              <Typography>80 лв</Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              sx={{ width: '100%' }}
            >
              <Button variant="outlined" sx={{ width: '90%', ml: 2 }}>
                Checkout Now
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default CartBody;
