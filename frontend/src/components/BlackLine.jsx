import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Colors } from './styles/theme';

const BlackLine = (props) => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        back
        sx={{ height: 40, p: 1.5 }}
      >
        <Box>
          <Typography variant="h6" color="common.white">
            {props.type}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color="common.white">
            {props.type}
          </Typography>
        </Box>
      </Stack>
      <Box sx={{ height: 25 }}></Box>
    </>
  );
};

export default BlackLine;
