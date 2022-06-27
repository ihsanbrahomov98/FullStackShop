import { IconButton, List, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import '@fontsource/montez';
import { Colors } from './theme';
import { Button, Container } from '@mui/material';

export const AppbarContainer = styled(Box)(() => ({
  display: 'flex',
  marginTop: 4,
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2px 8px',
}));
export const SubscribeToUsTypography = styled(Typography)(() => ({
  flexGrow: 1,
  fontSize: '1em',
  fontFamily: '"sans-serif", "cursive"',
  color: Colors.black,
  fontWeight: 'bold',
}));
export const SubscribeToUsTypographyLigherBlack = styled(Typography)(() => ({
  flexGrow: 1,
  fontSize: '1em',
  fontFamily: '"sans-serif", "cursive"',
  color: Colors.gray,
}));
