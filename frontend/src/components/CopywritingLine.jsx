import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { Colors } from './styles/theme';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const CopywritingLine = () => {
  const scrollToTOP = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      direction="row"
      sx={{ heigh: 20 }}
    >
      <Divider />
      <Stack sx={{ height: 50 }}></Stack>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        direction="row"
        sx={{ heigh: 70 }}
      >
        <Stack direction="row">
          <Typography
            sx={{ fontSize: { xs: 9, thousand: 14 } }}
            align="center"
            variant="body2"
            color="text.secondary"
          >
            АВТОРСКО 2022 ПРАВО
          </Typography>
          <span> &nbsp; </span>
          <Typography
            sx={{ fontSize: { xs: 9, thousand: 14 } }}
            variant="body2"
            color={Colors.black}
          >
            IHSAN.BG |
          </Typography>
          <span> &nbsp; </span>

          <Typography
            sx={{ fontSize: { xs: 9, thousand: 14 } }}
            variant="body2"
            color="text.secondary"
          >
            ВСИЧКИ ПРАВА ЗАПАЗЕНИ | COOKIES
          </Typography>
        </Stack>

        <Stack onClick={scrollToTOP} direction="row">
          <Typography
            sx={{ fontSize: { xs: 10, thousand: 14 } }}
            align="center"
            variant="body2"
            color={Colors.black}
          >
            ВРЪЩАНЕ В НАЧАЛОТО
          </Typography>
          <span> &nbsp; </span>
          <span> &nbsp; </span>
          <KeyboardArrowUpIcon />
        </Stack>
      </Stack>
    </Container>
  );
};
// ypography> Copyrights © 2022 Всички права запазени. Изработка онлайн магазин :

export default CopywritingLine;
