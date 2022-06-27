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
export const AppbarHeader = styled(Typography)(() => ({
  flexGrow: 1,
  fontSize: '3em',
  fontFamily: '"Montez", "cursive"',
  color: Colors.secondary,
}));
export const AppbarHeaderSansSerif = styled(Typography)(() => ({
  padding: '4px',
  flexGrow: 1,
  fontSize: '1.2em',
  fontFamily: '"sans-serif", "cursive"',
  color: Colors.dove_gray,
}));
export const AppbarHeaderSansSerifSmaller = styled(Typography)(() => ({
  padding: '4px',
  flexGrow: 1,
  fontSize: '0.8em',
  fontFamily: '"sans-serif", "cursive"',
  color: Colors.black,
}));
export const AppbarHeaderSansSerif30 = styled(Typography)(() => ({
  padding: '4px',
  flexGrow: 1,
  fontSize: '1em',
  fontFamily: '"sans-serif", "cursive"',
  color: Colors.dove_gray,
  fontWeight: 'bold',
  '&:hover': {
    color: Colors.dark,
    borderColor: Colors.dark,
  },
}));
export const BottomNavListItems = styled(Typography)(() => ({
  padding: '4px',
  flexGrow: 1,
  fontSize: '1em',
  fontFamily: '"sans-serif", "cursive"',
  color: Colors.white,
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const NavbarListItemsTypoghrpahy = styled(Typography)(() => ({
  padding: '4px',
  flexGrow: 1,
  fontSize: '1em',
  fontFamily: '"sans-serif", "cursive"',
  color: Colors.black,
  '&:hover': {
    color: Colors.dark,
    borderColor: Colors.dark,
  },
}));
export const AppbarHeaderSansSerif30Procent = styled(Typography)(() => ({
  flexGrow: 1,
  fontSize: '1em',
  fontFamily: '"sans-serif", "cursive"',
  color: Colors.black,
}));
export const StyledContainer = styled(Container)(() => ({
  flexGrow: 1,
  fontSize: '1em',
  fontFamily: '"sans-serif", "cursive"',
  color: Colors.black,
  backgroundColor: Colors.dark,
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
  width: '5.3rem',
  height: '1.5rem',
  color: Colors.dark,
  borderColor: Colors.dark,
  border: '2px solid',

  backgroundColor: Colors.white,

  fontWeight: 'bold',
  fontSize: '16px',
  [theme.breakpoints.down('sm')]: { padding: '10px 0px', fontSize: '14px' },
}));
