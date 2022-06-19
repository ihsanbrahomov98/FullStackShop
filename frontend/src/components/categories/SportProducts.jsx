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

const SportProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get('/back/mock/api/findall');

      const filteredItemsWoman = data.filter(
        (item) => item.category === 'sport'
      );
      setProducts(filteredItemsWoman);
      console.log(products);
    };
    fetchproducts();
  }, []);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={1}
        sx={{ flexGrow: 1, pl: 2, pr: 2 }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {products.map((product) => (
            <Grid item xs={3}>
              <Link to={`/products/sport/${product._id}`}>
                <Card>
                  <CardMedia
                    component="img"
                    height="240"
                    image={product.img}
                    alt={product.name}
                  />
                  <CardContent sx={{ bgcolor: 'secondary.main' }}>
                    <Typography align="center" color="common.white">
                      {product.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </>
  );
};

export default SportProducts;
