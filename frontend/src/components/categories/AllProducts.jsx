import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

const styledWrapper = styled('div')({});

const SingleCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get('/back/mock/api/findall');

      setProducts(data);
      console.log(products);
    };
    fetchproducts();
  }, []);

  // const handleClick = (c) => {
  //   switch (c) {
  //     case 'Default':
  //       setComponent(<Share />);
  //       break;
  //     case 'Hovered':
  //       setComponent(<More />);
  //       break;
  //   }
  // };

  return (
    <>
      {' '}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={1}
        sx={{ flexGrow: 1, pl: 2, pr: 2 }}
      >
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {products.map((product) => (
            <Grid item xs={3}>
              <styledWrapper>
                <Link
                  exact
                  to={`/products/all/${product._id}`}
                  underline="none"
                >
                  <Card disableUnderline>
                    <CardMedia
                      component="img"
                      height="240"
                      image={product.img}
                      alt={product.name}
                    />
                    <CardContent>
                      <Typography
                        disableUnderline
                        align="center"
                        sx={{ textDecoration: 'none' }}
                      >
                        {product.name}
                      </Typography>
                      <Typography align="center">
                        {`${product.price}.00 ЛВ`}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </styledWrapper>
            </Grid>
          ))}
        </Grid>
      </Stack>
      ;
    </>
  );
};

export default SingleCard;
