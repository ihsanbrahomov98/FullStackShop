import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { Colors } from './styles/theme';
import Button from '@mui/material/Button';
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
      sx={{ heigh: 125, p: 3, bottom: 50 }}
    >
      <Divider />
      <Stack sx={{ height: 38 }}></Stack>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        direction="row"
        sx={{ heigh: 125 }}
      >
        <Stack direction="row">
          <Typography
            sx={{ fontSize: 14 }}
            align="center"
            variant="body2"
            color="text.secondary"
          >
            АВТОРСКО 2022 ПРАВО
          </Typography>
          <span> &nbsp; </span>
          <Typography variant="body2" color={Colors.black} sx={{ pb: 3 }}>
            IHSAN.BG |
          </Typography>
          <span> &nbsp; </span>

          <Typography variant="body2" color="text.secondary" sx={{ pb: 3 }}>
            ВСИЧКИ ПРАВА ЗАПАЗЕНИ | COOKIES
          </Typography>
        </Stack>

        <Stack>
          <Typography
            onClick={scrollToTOP}
            variant="body2"
            color={Colors.black}
            sx={{ pb: 3 }}
          >
            ВРЪЩАНЕ В НАЧАЛОТО
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};
// ypography> Copyrights © 2022 Всички права запазени. Изработка онлайн магазин :

export default CopywritingLine;
