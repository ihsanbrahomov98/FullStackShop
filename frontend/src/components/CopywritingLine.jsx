import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const CopywritingLine = () => {
  return (
    <Box sx={{ heigh: 25, bgcolor: 'text.secondary' }}>
      <Typography align="center">
        Copyrights © 2022 Всички права запазени. Изработка онлайн магазин :
        ihsanBrahomov
      </Typography>
    </Box>
  );
};

export default CopywritingLine;
