import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { Colors } from './theme';
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
  width: { lg: '9.3rem', thousand: '9rem', sm750: '4rem' },
  minWidth: { lg: '9.3rem', thousand: '9rem', sm750: '4rem' },
  height: '3rem',
  color: Colors.white,
  borderColor: Colors.dark,
  border: '2px solid',

  backgroundColor: Colors.dark,
  '&:hover': { backgroundColor: Colors.white, color: Colors.dark },
  fontWeight: 'bold',
  fontSize: '16px',
  [theme.breakpoints.down('sm')]: { padding: '10px 0px', fontSize: '14px' },
}));
