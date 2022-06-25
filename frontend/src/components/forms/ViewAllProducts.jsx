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
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
const ViewAllProducts = () => {
  const [manProducts, setManproducts] = useState([]);
  const [womanProducts, setWomanProducts] = useState([]);
  const [childProducts, setChildProducts] = useState([]);
  const [sportProducts, setSportProducts] = useState([]);
  const [accessoriesProducts, setAccessoriesProducts] = useState([]);
  // useEffect HELL START
  // MAN
  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get('/back/mock/api/findall');

      const filteredItemsMan = data.filter((item) => item.category === 'man');
      setManproducts(filteredItemsMan);
    };
    fetchproducts();
  }, []);
  // WOMAN
  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get('/back/mock/api/findall');

      const filteredItemsWoman = data.filter(
        (item) => item.category === 'woman'
      );
      setWomanProducts(filteredItemsWoman);
    };
    fetchproducts();
  }, []);
  // CHILD
  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get('/back/mock/api/findall');

      const filteredItemsChild = data.filter(
        (item) => item.category === 'child'
      );
      setChildProducts(filteredItemsChild);
    };
    fetchproducts();
  }, []);
  // SPORT
  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get('/back/mock/api/findall');

      const filteredItemsSport = data.filter(
        (item) => item.category === 'sport'
      );
      setSportProducts(filteredItemsSport);
    };
    fetchproducts();
  }, []);
  // Accessories
  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get('/back/mock/api/findall');

      const filteredItemsAccessories = data.filter(
        (item) => item.category === 'accessories'
      );
      setAccessoriesProducts(filteredItemsAccessories);
    };
    fetchproducts();
  }, []);
  // useEffect HELL END

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  useEffect(() => {}, []);

  return (
    <>
      <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
        {/* TAB
         */}
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Man" {...a11yProps(0)} />
            <Tab label="Woman" {...a11yProps(1)} />
            <Tab label="Child" {...a11yProps(2)} />
            <Tab label="Sport" {...a11yProps(3)} />
            <Tab label="Acces.." {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {/* MAN PRODUCTS TAB BEGINING
            ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {manProducts.map((product) => (
                <Grid item xs={3}>
                  <Link to={`/products/all/${product._id}`}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="100"
                        image={product.img}
                        alt={product.name}
                      />
                      <CardContent
                        sx={{ bgcolor: 'secondary.main', height: 6 }}
                      >
                        <Typography
                          variant="subtitle2"
                          align="center"
                          color="common.white"
                        >
                          {product.userId}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          {/* MAN PRODUCTS TAB END
            ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/*WOMAN PRODUCTS TAB BEGIN
            ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {womanProducts.map((product) => (
                <Grid item xs={3}>
                  <Link to={`/products/all/${product._id}`}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="100"
                        image={product.img}
                        alt={product.name}
                      />
                      <CardContent
                        sx={{ bgcolor: 'secondary.main', height: 14 }}
                      >
                        <Typography
                          variant="subtitle2"
                          align="center"
                          color="common.white"
                        >
                          {product.userId}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          {/*WOMAN PRODUCTS TAB END
            ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/*CHILD PRODUCTS  BEGIN
            ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {childProducts.map((product) => (
                <Grid item xs={3}>
                  <Link to={`/products/all/${product._id}`}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="100"
                        image={product.img}
                        alt={product.name}
                      />
                      <CardContent
                        sx={{ bgcolor: 'secondary.main', height: 14 }}
                      >
                        <Typography
                          variant="subtitle2"
                          align="center"
                          color="common.white"
                        >
                          {product.userId}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          {/*CHILD PRODUCTS TAB END
            ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/*SPORT PRODUCTS  BEGIN
            ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {sportProducts.map((product) => (
                <Grid item xs={3}>
                  <Link to={`/products/all/${product._id}`}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="100"
                        image={product.img}
                        alt={product.name}
                      />
                      <CardContent
                        sx={{ bgcolor: 'secondary.main', height: 14 }}
                      >
                        <Typography
                          variant="subtitle2"
                          align="center"
                          color="common.white"
                        >
                          {product.userId}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          {/*SPORT PRODUCTS TAB END
            ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/*ACCESSORIES PRODUCTS  BEGIN
            ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {accessoriesProducts.map((product) => (
                <Grid item xs={3}>
                  <Link to={`/products/all/${product._id}`}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="100"
                        image={product.img}
                        alt={product.name}
                      />
                      <CardContent
                        sx={{ bgcolor: 'secondary.main', height: 14 }}
                      >
                        <Typography
                          variant="subtitle2"
                          align="center"
                          color="common.white"
                        >
                          {product.userId}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          {/*ACCESSORIES PRODUCTS  END
            ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
        </SwipeableViews>
      </Box>
    </>
  );
};

export default ViewAllProducts;
