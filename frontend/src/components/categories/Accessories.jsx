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
import { axiosInstance } from '../../config';
import Container from '@mui/material/Container';
import { useLocation } from 'react-router';
import Grid from '@mui/material/Grid';
import BoxForColor from './BoxForColor';
import Pagination from '@mui/material/Pagination';
import {
  CartButtonBlack,
  TypographyStyled,
} from '../styles/SingleProductStyles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Rating from '@mui/material/Rating';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FixedCricles from '../FixedCricles';

const Accessories = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [sort, setSort] = useState('евтино');
  const [sortBySize, setSortBySize] = useState('А');
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(5);
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
      const { data } = await axiosInstance.get('/back/mock/api/findall');

      const filteredItemsWoman = data.filter((item) => item.category === cat);
      setProducts(filteredItemsWoman);
    };
    fetchproducts();
  }, [pageSize, setPageSize]);

  useEffect(() => {
    if (sort === 'евтино') {
      setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else if (sort === 'скъпо') {
      setProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    } else {
      setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    }
  }, [sort]);
  useEffect(() => {
    if (sortBySize === 'A') {
      setProducts((prev) => [...prev].sort());
    } else if (sortBySize === 'Z') {
      setProducts((prev) => [...prev].reverse());
    } else {
      setProducts((prev) => [...prev].sort());
    }
  }, [sortBySize]);
  return (
    <>
      <Container sx={{ pb: 5, pt: 5 }} direction="row">
        <Stack direction="row" justifyContent="center" alignItems="flex-start">
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
                  <Typography
                    sx={{ display: { xs: 'none', thousand: 'flex' } }}
                  >
                    Сортирай по цена :
                  </Typography>
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
                        setSort('евтино');
                      }}
                      disableRipple
                      onChange={pageChange}
                    >
                      евтино
                    </MenuItem>
                    <MenuItem
                      sx={{
                        backgroundColor: Colors.grayForCart,
                        '&:hover': { backgroundColor: Colors.grayForMenu },
                      }}
                      onClick={() => {
                        setSort('скъпо');
                      }}
                      disableRipple
                    >
                      скъпо
                    </MenuItem>
                    {/* Second Sort */}
                  </Menu>
                  <Typography
                    sx={{ display: { xs: 'none', thousand: 'flex' } }}
                  >
                    Покажи по:
                  </Typography>
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
                  <Typography
                    sx={{ display: { xs: 'none', thousand: 'flex' } }}
                  >
                    Сортирай по име:
                  </Typography>
                  <CartButtonBlack
                    sx={{ display: { xs: 'none', thousand: 'flex' } }}
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
                        setSortBySize('A');
                      }}
                      disableRipple
                      onChange={pageChange}
                    >
                      A
                    </MenuItem>
                    <MenuItem
                      sx={{
                        backgroundColor: Colors.grayForCart,
                        '&:hover': { backgroundColor: Colors.grayForMenu },
                      }}
                      onClick={() => {
                        setSortBySize('Z');
                      }}
                      disableRipple
                    >
                      Z
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
                sx={{ pt: 3 }}
                rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {pagginationData?.map((product) => (
                  <Grid item={{ xs: 12, md950: 4, lg: 3 }}>
                    <Card
                      sx={{
                        border: 2,
                        borderColor: Colors.white,
                        p: 2,
                        '&:hover': {
                          borderColor: Colors.grayForMenu,
                          border: 2.5,
                          transform: 'scale3d(1.05, 1.05, 1)',
                          image: product.img,
                        },
                      }}
                    >
                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/products/accessories/${product._id}`}
                      >
                        <CardMedia
                          component="img"
                          height="240"
                          image={product.img}
                          alt={product.name}
                          style={{
                            '&:hover': {
                              image: product.img,
                              transform: 'scale3d(1.05, 1.05, 1)',
                              height: '140',
                            },
                          }}
                          sx={{}}
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
                              sx={{
                                width: '100%',
                              }}
                            >
                              <Stack>
                                {' '}
                                <Rating
                                  name="read-only"
                                  value={value}
                                  readOnly
                                />
                              </Stack>
                              <Stack direction="row" spacing={1}>
                                <Stack>
                                  <FavoriteBorderOutlinedIcon
                                    sx={{ color: Colors.yellow }}
                                  />
                                </Stack>
                                <Stack>
                                  <ShoppingCartOutlinedIcon
                                    sx={{ color: Colors.yellow }}
                                  />
                                </Stack>
                              </Stack>
                            </Stack>

                            <Stack spacing={2} sx={{ width: '100%', pt: 1 }}>
                              <TypographyStyled
                                align="center"
                                sx={{ fontWeight: 'bold' }}
                              >
                                {product.name}
                              </TypographyStyled>
                            </Stack>
                            <Stack
                              spacing={2}
                              justifyContent="center"
                              direction="row"
                              alignItems="center"
                              sx={{ width: '100%' }}
                            >
                              <Typography
                                sx={{ pl: 0.3 }}
                                variant="body2"
                                color={Colors.black}
                              >
                                Категория: {product.category}
                              </Typography>
                            </Stack>
                            <Stack
                              direction="row"
                              justifyContent="flex-end"
                              alignItems="flex-end"
                              sx={{
                                flex: 2,
                                width: '100%',
                              }}
                            >
                              <Stack
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                sx={{ width: '100%', pt: 1 }}
                                spacing={1}
                              >
                                <Typography
                                  align="right"
                                  style={{ textDecoration: 'none' }}
                                  sx={{
                                    fontWeight: 'bold',
                                    color: Colors.black,
                                  }}
                                >
                                  {product.price}
                                </Typography>
                                <Stack
                                  direction="column"
                                  alignItems="center"
                                  justifyContent="center"
                                >
                                  <Typography
                                    style={{ textDecoration: 'none' }}
                                    sx={{
                                      fontWeight: 'bold',
                                      fontSize: 10,
                                      color: Colors.black,
                                    }}
                                  >
                                    .00{' '}
                                  </Typography>
                                  <Typography
                                    style={{ textDecoration: 'none' }}
                                    sx={{
                                      fontWeight: 'bold',
                                      fontSize: 10,
                                      color: Colors.orange,
                                      ml: 0.2,
                                    }}
                                  >
                                    {' '}
                                    ЛВ
                                  </Typography>
                                </Stack>
                              </Stack>
                            </Stack>

                            <Stack
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              spacing={0.7}
                              sx={{ pt: 1, pr: 0.4 }}
                            >
                              {product.color.map((sizeItem) => (
                                <BoxForColor sizeItem={sizeItem} />
                              ))}
                            </Stack>
                            <Stack
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              spacing={0.7}
                              sx={{ pt: 1.5 }}
                            >
                              {product.size.map((sizeNumber) => (
                                <Typography
                                  style={{ textDecoration: 'none' }}
                                  sx={{
                                    fontSize: 12,
                                    color: Colors.black,
                                    fontWeight: 'bold',
                                  }}
                                >
                                  {sizeNumber}
                                </Typography>
                              ))}
                            </Stack>
                          </Stack>
                        </CardContent>
                      </Link>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Stack>
        </Stack>
        <FixedCricles />
      </Container>
    </>
  );
};

export default Accessories;
