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

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import MenuFilter from './MenuFilter';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Colors = {
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
  orange: '#f35135',
};
const theme = createTheme({
  palette: {
    primary: { main: Colors.primary },
    secondary: { main: Colors.orange },
    info: { main: Colors.orange },
  },
});

const SportProducts = () => {
  const [products, setProducts] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [pageProducts, setPageProducts] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [pagginationData, setPagginationData] = useState([]);
  const [paggination, setPaggination] = useState({
    count: 0,
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
  }, [pageSize]);
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
        setPaggination({ ...paggination, count: response.count });
        setPagginationData(response.data);
        console.log(pagginationData);
      });
  }, [paggination.from, paggination.to, products, pageSize]);
  const pageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPaggination({ ...paggination, from: from, to: to });
  };
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      minWidth: 80,

      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        backgroundColor: Colors.orange,
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 14,
          color: Colors.orange,
        },
        '&:active': {
          backgroundColor: Colors.orange,
        },
      },
    },
  }));
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container sx={{ pb: 4 }}>
          <Stack direction="row" justifyContent="flex-end" alignItems="center">
            <Button
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              style={{ width: 80 }}
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              {pageSize}
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  setPageSize(1);
                  handleClick();
                }}
                disableRipple
              >
                1
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setPageSize(2);
                  handleClick();
                }}
                disableRipple
              >
                2
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setPageSize(5);
                  handleClick();
                }}
                disableRipple
              >
                5
              </MenuItem>

              <MenuItem
                onClick={() => {
                  setPageSize(10);
                  handleClick();
                }}
                disableRipple
              >
                10
              </MenuItem>
            </StyledMenu>

            <Pagination
              count={Math.ceil(paggination.count / pageSize)}
              variant="outlined"
              shape="rounded"
              color="secondary"
              sx={{
                backgroundColor: Colors.white,
                '& 	.Mui-focusVisiblet': {},
              }}
              onChange={pageChange}
            />
          </Stack>
        </Container>
        <Container sx={{ pb: 2 }}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={1}
            sx={{ flexGrow: 1 }}
          >
            <Grid container rowSpacing={3} columnSpacing={13}>
              {pagginationData.map((product) => (
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
      </ThemeProvider>
    </>
  );
};

export default SportProducts;
