import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

const CopywritingLine = () => {
  return (
    <Container direction="row" sx={{ heigh: 55 }}>
      <Stack direction="row" sx={{ flex: 6 }}>
        <Typography align="center">
          Copyrights © 2022 Всички права запазени. Изработка онлайн магазин :
          ihsanBrahomov
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ flex: 1 }}>
        <Typography align="center">
          Copyrights © 2022 Всички права запазени. Изработка онлайн магазин :
          ihsanBrahomov
        </Typography>
      </Stack>
    </Container>
  );
};

export default CopywritingLine;
