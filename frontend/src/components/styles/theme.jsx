import { createTheme } from '@mui/material/styles';
import { darken, lighten } from 'polished';
export const DrawerWidth = 250;
export const Colors = {
  primary: '#5f2c3e',
  secondary: '#d1adcc',
  success: '#4CAF50',
  info: '#00a2ff',
  danger: '#FF5722',
  warning: '#FFC107',
  dark: '#0e1b20',
  light: '#aaa',
  muted: '#abafb3',
  border: '#DDDFE1',
  inverse: '#2F3D4A',
  shaft: '#333',
  dim_grey: '#696969',
  dove_gray: '#505050',
  body_bg: '#f3f6f9',
  light_gray: 'rgb(230,230,230)',
  white: '#fff',
  black: '#000000',
  almostWhite: '#f2f2f2',
  grayForSub: '#f7f7f7',
  orange: '#f37335',
  grayForCart: '#f0f0f0',
  orangeForCartHover: '#ff9211',
  grayForMenu: '#e4e4e4',
  yellow: '#faaf00',
  adminNavbar: '#444444',
};
const theme = createTheme({
  palette: {
    primary: { main: Colors.primary },
    secondary: { main: Colors.secondary },
    info: { main: Colors.orange },
  },
  components: {
    MuiButton: {
      defaultProps: { disableRipple: true, disableElevation: true },
    },
    MuiTooltip: {
      defaultProps: { arrow: true },
      styleOverrides: {
        tooltip: { background: Colors.primary },
        arrow: { color: Colors.primary },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: DrawerWidth,
          background: Colors.primary,
          color: Colors.secondary,
          borderRadius: '0px 100px 0px 0px',
          borderRight: `1px solid ${Colors.primary}`,
        },
      },
    },
    MuiDivider: {
      styleOverrides: { root: { borderColor: lighten(0.2, Colors.primary) } },
    },
    MyShopButton: {
      styleOverrides: {
        // root: { color: Colors.white },
        primary: {
          background: Colors.muted,
          '&:hover': { background: lighten(0.9, Colors.muted) },
        },
        secondary: {
          background: `${Colors.muted}`,
          '&:hover': { background: lighten(0.9, Colors.muted) },
        },
      },
    },
  },
});
export default theme;
