import { IconButton, List, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import '@fontsource/montez';
import { Colors } from './theme';
import { Button, Container } from '@mui/material';

export const CartButtonOrange = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'color',
  name: 'MyShopButton',
  slot: 'Root',
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === 'primary' && styles.primary,
    props.color === 'secondary' && styles.secondary,
  ],
})(({ theme }) => ({
  width: '100%',
  height: '100%',
  color: Colors.dark,
  borderColor: Colors.dark,
  border: '1px solid',

  backgroundColor: Colors.orange,

  fontWeight: 'bold',
  fontSize: '16px',
  '&:hover': { backgroundColor: Colors.orangeForCartHover },
  [theme.breakpoints.down('sm')]: { padding: '10px 0px', fontSize: '14px' },
}));
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
  color: Colors.white,
  borderColor: Colors.dark,
  border: '1px solid',

  backgroundColor: Colors.black,

  fontWeight: 'bold',
  fontSize: '10px',
  '&:hover': { backgroundColor: Colors.grayForCart, color: Colors.dark },
  [theme.breakpoints.down('sm')]: { fontSize: '10px' },
}));
export const CartButtonDelete = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'color',
  name: 'MyShopButton',
  slot: 'Root',
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === 'primary' && styles.primary,
    props.color === 'secondary' && styles.secondary,
  ],
})(({ theme }) => ({
  color: Colors.white,
  borderColor: Colors.dark,
  border: '1px solid',

  fontWeight: 'bold',
  fontSize: '10px',
  '&:hover': { color: Colors.dark },
  [theme.breakpoints.down('sm')]: { fontSize: '10px' },
}));
