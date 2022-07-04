import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Colors } from './styles/theme';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';

const CardsUnderSlider = () => {
  return (
    <>
      <Stack sx={{ height: 25 }}></Stack>
      <Grid
        container
        direction="row"
        rowSpacing={1}
        justifyContent="center"
        alignItems="center"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={2}>
          <Link to="/products/man" style={{ textDecoration: 'none' }}>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://gomez.bg/assets/photo/margin-10/upload/product/9/17-05-2022-maciej-bartkowski02349-edit-trim-196-295.jpg"
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
            <Typography
              sx={{ pt: 4 }}
              align="center"
              variant="body2"
              color={Colors.dark}
            >
              МЪЖКИ ОБУВКИ
            </Typography>
            <Typography
              sx={{ fontSize: 10 }}
              align="center"
              variant="body2"
              color="text.secondary"
            >
              АДДИДАС
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link to="/products/man" style={{ textDecoration: 'none' }}>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://gomez.bg/assets/photo/margin-10/upload/product/535/18-05-202202516-trim-196-295.jpg"
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
            <Typography
              sx={{ pt: 4 }}
              align="center"
              variant="body2"
              color={Colors.dark}
            >
              ЖЕНСКИ ОБУВКИ
            </Typography>
            <Typography
              sx={{ fontSize: 10 }}
              align="center"
              variant="body2"
              color="text.secondary"
            >
              ГОПА
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link to="/products/man" style={{ textDecoration: 'none' }}>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://gomez.bg/assets/photo/margin-10/upload/product/282/13-05-202201326-edit-trim-196-295.jpg"
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
            <Typography
              sx={{ pt: 4 }}
              align="center"
              variant="body2"
              color={Colors.dark}
            >
              ДЕТСКИ ОБУВКИ
            </Typography>
            <Typography
              sx={{ fontSize: 10 }}
              align="center"
              variant="body2"
              color="text.secondary"
            >
              САНДАЛИ
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link to="/products/man" style={{ textDecoration: 'none' }}>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://gomez.bg/assets/photo/margin-10/upload/product/314/25-05-trim-196-295.jpg"
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
            <Typography
              sx={{ pt: 4 }}
              align="center"
              variant="body2"
              color={Colors.dark}
            >
              СПОРТНИ ОБУВКИ
            </Typography>
            <Typography
              sx={{ fontSize: 10 }}
              align="center"
              variant="body2"
              color="text.secondary"
            >
              НАЙК
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link to="/products/man" style={{ textDecoration: 'none' }}>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://gomez.bg/assets/photo/margin-10/upload/product/911/na222m00003504100os-1-trim-196-295.jpg"
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
            <Typography
              sx={{ pt: 4 }}
              align="center"
              variant="body2"
              color={Colors.dark}
            >
              АКСЕСОАРИ
            </Typography>
            <Typography
              sx={{ fontSize: 10 }}
              align="center"
              variant="body2"
              color="text.secondary"
            >
              ШАПКА НА ДАНИЯ
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default CardsUnderSlider;
