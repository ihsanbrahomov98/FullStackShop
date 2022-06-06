import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" gutterBottom>
            YOUR BAG
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" gutterBottom>
            YOUR BAG
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default CartBody;
