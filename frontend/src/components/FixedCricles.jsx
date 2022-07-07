import React from 'react';
import { Stack } from '@mui/material';

import Box from '@mui/material/Box';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import MessageIcon from '@mui/icons-material/Message';

import Container from '@mui/material/Container';

import { Colors } from './styles/theme';
import Messanger from './Messanger';

const scrollToTOP = () => {
  window.scrollTo(0, 0);
};

const FixedCricles = () => {
  return (
    <>
      <Container style={{ position: 'relative' }}>
        <Stack
          onClick={scrollToTOP}
          width="5%"
          position="fixed"
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{
            height: { xs: 30, sm: 45, thousand: 60 },
            bgcolor: Colors.orange,
            bottom: 65,

            left: { xs: 5, thousand: 13 },
            borderRadius: '50%',
          }}
        >
          <Box>
            <KeyboardArrowUpIcon />
          </Box>
        </Stack>
        <Messanger />
      </Container>
    </>
  );
};

export default FixedCricles;
