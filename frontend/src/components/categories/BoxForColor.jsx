import { IconButton, List, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import '@fontsource/montez';
import { Colors } from '../styles/theme';
import { Button, Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import { borderColor } from 'polished';

const AppbarContainer = styled(Box)((props) => ({
  display: 'flex',

  justifyContent: 'center',
  alignItems: 'center',
  width: 15,
  textDecoration: 'none',
  fontWeight: 'bold',
  height: 15,
  color: 'black',
  backgroundColor: props.sizeItem,
}));

const BoxForColor = (props) => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      ></Stack>
      <AppbarContainer
        style={{ textDecoration: 'none' }}
        sx={{ borderColor: Colors.black, border: 0.5 }}
        sizeItem={props.sizeItem}
      />
    </>
  );
};

export default BoxForColor;
