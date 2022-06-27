import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Colors } from './styles/theme';

import Typography from '@mui/material/Typography';

const CardsUnderSlider = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        rowSpacing={1}
        justifyContent="center"
        alignItems="center"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="https://eobuvki.bg/img/img_e_shop/thumbs/p_1007054_3.jpg"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
          <Typography
            sx={{ pt: 3 }}
            align="center"
            variant="body2"
            color={Colors.dark}
          >
            МЪЖКИ ОБУВКИ
          </Typography>
          <Typography
            sx={{ fontSize: 0 }}
            align="center"
            variant="body2"
            color="text.secondary"
          >
            АДДИДАС
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default CardsUnderSlider;
