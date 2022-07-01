import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Colors } from '../styles/theme';
import { Button, CardActionArea, CardActions, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import { useLocation } from 'react-router';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import MenuFilter from './MenuFilter';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Paggination = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [sort, setSort] = useState('newest');
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [pagginationData, setPagginationData] = useState([]);
  const [paggination, setPaggination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [anchorElFilter, setAnchorElFilter] = useState(null);
  const openFilter = Boolean(anchorElFilter);

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
        setPagginationData(response.data);
        setPaggination({ ...paggination, count: response.count });
      });
  }, [
    paggination.from,
    paggination.to,
    products,
    pageSize,
    setPageSize,
    paggination.count,
  ]);
  const pageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPaggination({ ...paggination, from: from, to: to, products });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickFilter = (event) => {
    setAnchorElFilter(event.currentTarget);
  };
  const handleCloseFilter = () => {
    setAnchorElFilter(null);
  };
  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get('/back/mock/api/findall');

      const filteredItemsWoman = data.filter((item) => item.category === cat);
      setProducts(filteredItemsWoman);
      console.log(products);
    };
    fetchproducts();
  }, [pageSize, setPageSize]);
  useEffect(() => {
    if (sort === 'newest') {
      setProducts((prev) =>
        [...prev].sort((a, b) => b.quantityLeft - a.quantityLeft)
      );
    } else if (sort === 'asc') {
      setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
    console.log(products);
  }, [sort]);

  return (
    <>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ pb: 4 }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="250"
            flex={2}
          >
            <Stack
              spacing={2}
              alignItems="center"
              justifyContent="center"
              direction="row"
            >
              <Typography>Сортирай по:</Typography>
              <Button
                id="size"
                aria-controls={openFilter ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openFilter ? 'true' : undefined}
                variant="contained"
                disableElevation
                style={{ width: 80 }}
                onClick={handleClickFilter}
                endIcon={<KeyboardArrowDownIcon />}
              >
                {sort}
              </Button>
              <Menu
                id="sizemenu"
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorElFilter}
                open={openFilter}
                onClose={handleCloseFilter}
              >
                <MenuItem
                  onClick={() => {
                    setSort('asc');
                  }}
                  disableRipple
                  onChange={pageChange}
                >
                  asc
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setSort('newest');
                  }}
                  disableRipple
                >
                  newest
                </MenuItem>
              </Menu>
            </Stack>
          </Stack>
          <Stack
            flex={2}
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button
              id="pageButton"
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
            <Menu
              id="page"
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
                  pageChange();
                }}
                disableRipple
                onChange={pageChange}
              >
                1
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setPageSize(2);
                  handleClick();
                  pageChange();
                }}
                disableRipple
              >
                2
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setPageSize(5);
                  handleClick();
                  pageChange();
                }}
                disableRipple
              >
                5
              </MenuItem>

              <MenuItem
                onClick={() => {
                  setPageSize(10);
                  handleClick();
                  pageChange();
                }}
                disableRipple
              >
                10
              </MenuItem>
            </Menu>

            <Pagination
              count={Math.ceil(paggination.count / pageSize)}
              variant="outlined"
              shape="rounded"
              color="secondary"
              onChange={pageChange}
            />
          </Stack>
        </Stack>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={1}
          sx={{ flexGrow: 1, pl: 2, pr: 2 }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {pagginationData?.map((product) => (
              <Grid item xs={3}>
                <Link to={`/products/woman/${product._id}`}>
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
      </Container>
    </>
  );
};

export default Paggination;
