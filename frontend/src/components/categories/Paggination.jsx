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
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Paggination = () => {
  const [checkedBool2, setChecked2Bool] = React.useState(false);

  const [checked23Bool, setChecked23Bool] = React.useState(false);
  const [checked232Bool, setChecked232Bool] = React.useState(false);

  const [state, setState] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
  });
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [sort, setSort] = useState('newest');
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [pagginationData, setPagginationData] = useState([]);
  const [sizeArray, setSizeArray] = React.useState([]);
  const [filteredArray, setFilteredArray] = React.useState([]);
  const [paggination, setPaggination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [anchorElFilter, setAnchorElFilter] = useState(null);
  const openFilter = Boolean(anchorElFilter);
  const handleCategory = (categoryInfo, caregoryBool) => {
    if (caregoryBool) {
      setSizeArray((sizeArray) => [...sizeArray, categoryInfo]);

      setFilteredArray(Array.from(new Set(sizeArray)));
      console.log(`added ${categoryInfo}, array is:${filteredArray}`);
    } else {
      //   setFilteredArray([]);
      setFilteredArray(filteredArray.filter((item) => item === categoryInfo));

      console.log(`removed ${categoryInfo}, array is:${filteredArray}`);
    }
  };
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
    console.log(pagginationData[1]?.price);

    setPagginationData(() =>
      pagginationData.filter((item) => item.price === Number(filteredArray))
    );
  }, [filteredArray, sizeArray, setFilteredArray]);
  //   useEffect(() => {
  //     if (state.antoine) {
  //       setPagginationData((pagginationData) => [...pagginationData]);
  //     } else if (state.jason) {
  //       setPagginationData((prev) =>
  //         pagginationData.filter((item) => item.price === 232)
  //       );
  //     } else {
  //       const fetchproducts = async () => {
  //         const { data } = await axios.get('/back/mock/api/findall');

  //         const filteredItemsWoman = data.filter((item) => item.category === cat);
  //         setProducts(filteredItemsWoman);
  //         console.log(products);
  //       };
  //       fetchproducts();
  //     }
  //   }, [state]);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;

  return (
    <>
      <Container direction="row">
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Stack
            flex={1}
            justifyContent="flex-start"
            alignItems="flex-start"
            direction="column"
          >
            <Stack>
              <Typography>Цена </Typography>
              <FormControl component="fieldset" variant="standard">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ padding: 3 }}
                        checked={checked23Bool}
                        onClick={() => {
                          setFilteredArray(23);
                        }}
                        name="23"
                      />
                    }
                    label="23"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ padding: 3 }}
                        checked={checked232Bool}
                        onClick={() => {
                          setChecked232Bool(!checked232Bool);
                          handleCategory(232, checked232Bool);
                          setFilteredArray(232);
                        }}
                      />
                    }
                    label="232"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ padding: 3 }}
                        checked={antoine}
                        name="antoine"
                        onClick={() => handleCategory(2, state.jason)}
                      />
                    }
                    label="2"
                  />
                </FormGroup>
                <FormHelperText>Be careful</FormHelperText>
              </FormControl>
            </Stack>
          </Stack>
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
                  <Typography>Сортирай по:</Typography>
                  <Button
                    id="size"
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
                        setSort('cheap');
                      }}
                      disableRipple
                      onChange={pageChange}
                    >
                      cheap
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setSort('expensive');
                      }}
                      disableRipple
                    >
                      expensive
                    </MenuItem>
                  </Menu>
                  <Typography>Покажи по:</Typography>
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
                  <Grid item xs={4}>
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
                            {product.price}
                          </Typography>
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
