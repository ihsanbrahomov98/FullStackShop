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
export const ShopAddButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'color',
  name: 'MyShopButton',
  slot: 'Root',
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === 'primary' && styles.primary,
    props.color === 'secondary' && styles.secondary,
  ],
})(({ theme }) => ({
  width: '6.3rem',
  height: '100%',
  color: Colors.white,
  borderColor: Colors.dark,
  border: '2px solid',

  backgroundColor: Colors.dark,
  '&:hover': { backgroundColor: Colors.white, color: Colors.dark },
  fontWeight: 'bold',
  fontSize: '16px',
  [theme.breakpoints.down('sm')]: { padding: '10px 0px', fontSize: '14px' },
}));
