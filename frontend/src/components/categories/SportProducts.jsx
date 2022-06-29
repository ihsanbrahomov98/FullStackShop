import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import { Colors } from '../styles/theme';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
const pageSize = 3;
const SportProducts = () => {
  const [products, setProducts] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [paggination, setPaggination] = useState({
    count: 1,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get('/back/mock/api/findall');

      const filteredItemsWoman = data.filter(
        (item) => item.category === 'sport'
      );
      setProducts(filteredItemsWoman);
    };
    fetchproducts();
  }, []);

  const service = {
    getData: ({ from, to }) => {
      return new Promise((resolve, reject) => {
        const data = products.slice(from, to);
        resolve({ count: products.length, data: data });
      });
    },
  };
  useEffect(() => {
    service
      .getData({ from: paggination.from, to: paggination.to })
      .then((response) => {
        console.log(response);
        setPaggination({ ...paggination, count: service.count });
      });
  }, [products, paggination.from, paggination.to]);
  const pageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
  };
  return (
    <>
      <Pagination
        count={Math.ceil(paggination.count)}
        variant="outlined"
        shape="rounded"
        onChange={pageChange}
      />
      <Container sx={{ pb: 2 }}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={1}
          sx={{ flexGrow: 1 }}
        >
          <Grid container rowSpacing={3} columnSpacing={13}>
            {products.map((product) => (
              <Grid item xs={4}>
                <Card
                  width="150"
                  height="150"
                  style={{ border: 'none', boxShadow: 'none' }}
                  sx={{
                    border: 'none',
                    '&:hover': {
                      color: 'gray',
                    },
                  }}
                >
                  {' '}
                  <Paper
                    elevation={24}
                    style={{
                      border: 'none',
                      '&:hover': {
                        elevation: '2',
                      },
                    }}
                  >
                    <Link
                      to={`/products/sport/${product._id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <CardMedia
                        image={product.img}
                        component="img"
                        height="200"
                        alt={product.name}
                        width="200"
                        sx={{ border: 'none' }}
                      />
                    </Link>

                    <CardContent sx={{ border: 'none' }}>
                      <Link
                        to={`/products/sport/${product._id}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <Typography
                          sx={{ pt: 4 }}
                          align="center"
                          variant="body2"
                          color={Colors.info}
                        >
                          New
                        </Typography>
                        <Typography
                          align="center"
                          variant="body2"
                          sx={{ fontSize: 19 }}
                          color={Colors.dark}
                        >
                          {product.description}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 12, pt: 1 }}
                          align="center"
                          variant="body2"
                          color="text.secondary"
                        >
                          КОЖЕНО МАРАТОНКИ PARKOUR
                        </Typography>
                        <Typography
                          sx={{ pt: 1 }}
                          align="center"
                          variant="body2"
                          color={Colors.dark}
                        >
                          {product.price}.00 ЛВ
                        </Typography>
                      </Link>
                    </CardContent>
                  </Paper>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </>
  );
};

export default SportProducts;
