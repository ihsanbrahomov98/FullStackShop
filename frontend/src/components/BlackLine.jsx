import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const BlackLine = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        back
        sx={{ height: 40, bgcolor: 'secondary.main', p: 1.5 }}
      >
        <Box>
          <Typography variant="h6" color="common.white">
            Мъжки обувки
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color="common.white">
            Мъжки обувки
          </Typography>
        </Box>
      </Stack>
      <Box sx={{ height: 25 }}></Box>
    </>
  );
};

export default BlackLine;
