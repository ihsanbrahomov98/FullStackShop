import { IconButton, List, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import '@fontsource/montez';
import { Colors } from './theme';
import { Button, Container } from '@mui/material';

export const CartButtonBlack = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'color',
  name: 'MyShopButton',
  slot: 'Root',
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === 'primary' && styles.primary,
    props.color === 'secondary' && styles.secondary,
  ],
})(({ theme }) => ({
  color: Colors.dark,
  borderColor: Colors.dark,
  border: '1px solid',

  backgroundColor: Colors.grayForCart,

  fontWeight: 'bold',
  fontSize: '10px',
  '&:hover': { backgroundColor: Colors.grayForMenu, color: Colors.dark },
  [theme.breakpoints.down('sm')]: { fontSize: '10px' },
}));
export const TypographyStyled = styled(Typography)(() => ({
  flexGrow: 1,
  fontSize: '1em',
  fontFamily: '"sans-serif", "cursive"',
  color: Colors.black,
}));
