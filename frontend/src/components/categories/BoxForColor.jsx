import { IconButton, List, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import '@fontsource/montez';
import { Colors } from '../styles/theme';
import { Button, Container } from '@mui/material';

const AppbarContainer = styled(Box)(() => ({
  display: 'flex',
  marginTop: 4,
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2px 8px',
  height: 25,
  color: Colors.black,
  backgroundColor: Colors.black,
  border: 3,
}));

const BoxForColor = () => {
  return <AppbarContainer />;
};

export default BoxForColor;
