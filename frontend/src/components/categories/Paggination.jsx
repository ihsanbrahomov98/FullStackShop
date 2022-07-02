import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Colors } from '../styles/theme';
import { Button, CardActionArea, CardActions, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import Container from '@mui/material/Container';
import { useLocation } from 'react-router';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import { CartButtonBlack } from '../styles/SingleProductStyles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Rating from '@mui/material/Rating';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Paggination = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [sort, setSort] = useState('cheap');
  const [sortBySize, setSortBySize] = useState('small');
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(1);
  const [value, setValue] = useState(4);
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
  const [anchorElSize, setAnchorElSize] = useState(null);
  const openSize = Boolean(anchorElSize);

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
  const handleClickSize = (event) => {
    setAnchorElSize(event.currentTarget);
  };
  const handleCloseSize = () => {
    setAnchorElSize(null);
  };

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get('/back/mock/api/findall');

      const filteredItemsWoman = data.filter((item) => item.category === cat);
      setProducts(filteredItemsWoman);
    };
    fetchproducts();
  }, [pageSize, setPageSize]);

  useEffect(() => {
    if (sort === 'cheap') {
      setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else if (sort === 'expensive') {
      setProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    } else {
      setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    }
  }, [sort]);
  useEffect(() => {
    if (sortBySize === 'small') {
      setProducts((prev) => [...prev].sort((a, b) => a.name - b.name));
    } else if (sortBySize === 'large') {
      setProducts((prev) => [...prev].sort((a, b) => b.name - a.name));
    } else {
      setProducts((prev) => [...prev].sort((a, b) => a.name - b.name));
    }
  }, [sortBySize]);

  return (
    <>
      <Container direction="row">
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Stack direction="column" flex={6}>
            <Stack>
              <Typography sx={{ fontSize: 38 }}>НАЙ-НОВИ</Typography>
            </Stack>
            <Divider />
            <Stack sx={{ height: 20 }}></Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
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
                  {/* First sort */}
                  <Typography>Сортирай по цена :</Typography>
                  <CartButtonBlack
                    id="priceForItem"
                    aria-controls={
                      openFilter ? 'demo-customized-menu' : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={openFilter ? 'true' : undefined}
                    variant="contained"
                    disableElevation
                    style={{ width: 80 }}
                    onClick={handleClickFilter}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    {sort}
                  </CartButtonBlack>
                  <Menu
                    id="priceForItem"
                    MenuListProps={{
                      'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorElFilter}
                    open={openFilter}
                    onClose={handleCloseFilter}
                    sx={{
                      '& .MuiMenu-paper': {
                        backgroundColor: Colors.grayForCart,
                      },
                    }}
                  >
                    <MenuItem
                      sx={{
                        backgroundColor: Colors.grayForCart,
                        '&:hover': { backgroundColor: Colors.grayForMenu },
                      }}
                      onClick={() => {
                        setSort('cheap');
                      }}
                      disableRipple
                      onChange={pageChange}
                    >
                      cheap
                    </MenuItem>
                    <MenuItem
                      sx={{
                        backgroundColor: Colors.grayForCart,
                        '&:hover': { backgroundColor: Colors.grayForMenu },
                      }}
                      onClick={() => {
                        setSort('expensive');
                      }}
                      disableRipple
                    >
                      expensive
                    </MenuItem>
                    {/* Second Sort */}
                  </Menu>
                  <Typography>Покажи по:</Typography>
                  <CartButtonBlack
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
                  </CartButtonBlack>
                  <Menu
                    id="page"
                    MenuListProps={{
                      'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    sx={{
                      '& .MuiMenu-paper': {
                        backgroundColor: Colors.grayForCart,
                      },
                    }}
                  >
                    <MenuItem
                      sx={{
                        backgroundColor: Colors.grayForCart,
                        '&:hover': { backgroundColor: Colors.grayForMenu },
                      }}
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
                      sx={{
                        backgroundColor: Colors.grayForCart,
                        '&:hover': { backgroundColor: Colors.grayForMenu },
                      }}
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
                      sx={{
                        backgroundColor: Colors.grayForCart,
                        '&:hover': { backgroundColor: Colors.grayForMenu },
                      }}
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
                      sx={{
                        backgroundColor: Colors.grayForCart,
                        '&:hover': { backgroundColor: Colors.grayForMenu },
                      }}
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
                  {/* Third Sort */}
                  <Typography>Сортирай по име:</Typography>
                  <CartButtonBlack
                    id="sizeFilter"
                    aria-controls={
                      openSize ? 'demo-customized-menu' : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={openSize ? 'true' : undefined}
                    variant="contained"
                    disableElevation
                    style={{ width: 80 }}
                    onClick={handleClickSize}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    {sortBySize}
                  </CartButtonBlack>
                  <Menu
                    id="sizeFilter"
                    MenuListProps={{
                      'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorElSize}
                    open={openSize}
                    onClose={handleCloseSize}
                    sx={{
                      '& .MuiMenu-paper': {
                        backgroundColor: Colors.grayForCart,
                      },
                    }}
                  >
                    <MenuItem
                      sx={{
                        backgroundColor: Colors.grayForCart,
                        '&:hover': { backgroundColor: Colors.grayForMenu },
                      }}
                      onClick={() => {
                        setSortBySize('small');
                      }}
                      disableRipple
                      onChange={pageChange}
                    >
                      small
                    </MenuItem>
                    <MenuItem
                      sx={{
                        backgroundColor: Colors.grayForCart,
                        '&:hover': { backgroundColor: Colors.grayForMenu },
                      }}
                      onClick={() => {
                        setSortBySize('large');
                      }}
                      disableRipple
                    >
                      large
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
                <Pagination
                  count={Math.ceil(paggination.count / pageSize)}
                  variant="outlined"
                  shape="rounded"
                  color="secondary"
                  onChange={pageChange}
                />
              </Stack>
            </Stack>
            <Stack sx={{ height: 20 }}></Stack>
            <Divider />
            <Stack sx={{ height: 20 }}></Stack>

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
                    <Link to={`/products/sport/${product._id}`}>
                      <Card
                        sx={{
                          border: 2,
                          borderColor: Colors.white,
                          p: 2,
                          '&:hover': {
                            borderColor: Colors.grayForMenu,
                          },
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="240"
                          image={product.img}
                          alt={product.name}
                        />
                        <CardContent sx={{}}>
                          <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Stack
                              direction="row"
                              justifyContent="space-between"
                              alignItems="center"
                              sx={{ width: '100%' }}
                            >
                              <Stack>
                                {' '}
                                <Rating
                                  name="read-only"
                                  value={value}
                                  readOnly
                                />
                              </Stack>
                              <Stack direction="row" spacing={2}>
                                <Stack>
                                  <FavoriteBorderOutlinedIcon
                                    sx={{ color: Colors.yellow }}
                                  />
                                </Stack>
                                <Stack>9</Stack>
                              </Stack>
                            </Stack>
                            <Stack>1</Stack>
                            <Stack>1</Stack>
                            <Stack>1</Stack>
                            <Stack>1</Stack>
                          </Stack>
                        </CardContent>
                      </Card>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Paggination;
