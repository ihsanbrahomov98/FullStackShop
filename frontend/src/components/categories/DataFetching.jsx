// // // prColor green
// // secprColor Brown
// // responsive // test mobile 500x500
// // hover // full card
// // fixed background
// // fixed header section
// // da znae6 kude si i filter
// // pagination
// // maha6 drugata navigaciq ostavq6 samo dolonata
// // vzimam vsi4ki danni -> Sort -> colletionNovi -> v component izvikvvam colekciqta s map getter
// // trqq da obesni6 na tupiq user kvo e :D
// // fixed buton za nagore /dolo lqvo
// // font-weigth 600 / bold
// // accordion toggle
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

// import { useLocation } from 'react-router';

// const Colors = {
//   primary: '#5f2c3e',
//   secondary: '#d1adcc',
//   success: '#4CAF50',
//   info: '#00a2ff',
//   danger: '#FF5722',
//   warning: '#FFC107',
//   dark: '#0e1b20',
//   light: '#aaa',
//   muted: '#abafb3',
//   border: '#DDDFE1',
//   inverse: '#2F3D4A',
//   shaft: '#333',
//   dim_grey: '#696969',
//   dove_gray: '#505050',
//   body_bg: '#f3f6f9',
//   light_gray: 'rgb(230,230,230)',
//   white: '#fff',
//   black: '#000000',
//   almostWhite: '#f2f2f2',
//   grayForSub: '#f7f7f7',
//   orange: '#f35135',
// };
// const theme = createTheme({
//   palette: {
//     primary: { main: Colors.primary },
//     secondary: { main: Colors.orange },
//     info: { main: Colors.orange },
//   },
// });

// const SportProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [hovered, setHovered] = useState(false);
//   const [pageProducts, setPageProducts] = useState([]);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [pageSize, setPageSize] = useState(10);

//   const location = useLocation();
//   const cat = location.pathname.split('/')[2];
//   const [filters, setFilters] = useState({});
//   const [sort, setSort] = useState('newest');
//   const handleFilters = (e) => {
//     const value = e.target.value;
//     setFilters({ ...filters, [e.target.name]: value });
//     console.log(filters);
//   };

//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const [count, setCount] = React.useState(1);
//   const [refresh, setRefresh] = React.useState(1);

//   const [pagginationData, setPagginationData] = useState([]);
//   const [paggination, setPaggination] = useState({
//     count: 0,
//     from: 0,
//     to: pageSize,
//   });

//   useEffect(() => {
//     const fetchproducts = async () => {
//       const { data } = await axios.get('/back/mock/api/findall');

//       const filteredItemsWoman = data.filter(
//         (item) => item.category === 'sport'
//       );
//       setProducts(filteredItemsWoman);
//       setLoading(true);
//     };
//     fetchproducts();
//   }, [pageSize, setPageSize]);
//   const showLoading = <Typography>Loading....</Typography>;
//   const service = {
//     getData: ({ from, to }) => {
//       return new Promise((resolve, reject) => {
//         const data = products.slice(from, to);
//         resolve({ count: products.length, data: data });
//       });
//     },
//   };

//   useEffect(() => {
//     service
//       .getData({ from: paggination.from, to: paggination.to })
//       .then((response) => {
//         console.log(response);
//         setPaggination({ ...paggination, count: response.count });
//         setPagginationData(response.data);
//         setLoading(false);
//       });
//   }, [paggination.from, paggination.to, products, setProducts, pageSize]);

//   const pageChange = (event, page) => {
//     const from = (page - 1) * pageSize;
//     const to = (page - 1) * pageSize + pageSize;

//     setPaggination({ ...paggination, from: from, to: to, products });
//   };
//   const numAscending = [...products].sort((a, b) => a.price - b.price);
//   const StyledMenu = styled((props) => (
//     <Menu
//       elevation={0}
//       anchorOrigin={{
//         vertical: 'bottom',
//         horizontal: 'right',
//       }}
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       {...props}
//     />
//   ))(({ theme }) => ({
//     '& .MuiPaper-root': {
//       minWidth: 80,

//       boxShadow:
//         'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
//       '& .MuiMenu-list': {
//         backgroundColor: Colors.orange,
//       },
//       '& .MuiMenuItem-root': {
//         '& .MuiSvgIcon-root': {
//           fontSize: 14,
//           color: Colors.orange,
//         },
//         '&:active': {
//           backgroundColor: Colors.orange,
//         },
//       },
//     },
//   }));
//   return (
//     <>
//       {loading ? (
//         showLoading
//       ) : (
//         <ThemeProvider theme={theme}>
//   <Container sx={{ pb: 4 }}>
//     <Stack
//       direction="row"
//       justifyContent="flex-end"
//       alignItems="center"
//     >
//       <Button
//         id="demo-customized-button"
//         aria-controls={open ? 'demo-customized-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         variant="contained"
//         disableElevation
//         style={{ width: 80 }}
//         onClick={handleClick}
//         name="size"
//         endIcon={<KeyboardArrowDownIcon />}
//       >
//         size
//       </Button>
//       <StyledMenu
//         id="demo-customized-menu"
//         MenuListProps={{
//           'aria-labelledby': 'demo-customized-button',
//         }}
//         anchorEl={anchorEl}
//         onChange={handleFilters}
//         open={open}
//         onClose={handleClose}
//       >
//         <MenuItem disableRipple>M</MenuItem>
//         <MenuItem disableRipple>S</MenuItem>
//         <MenuItem disableRipple>a2</MenuItem>

//         <MenuItem disableRipple>a3</MenuItem>
//       </StyledMenu>

//       <Button
//         id="demo-customized-button"
//         aria-controls={open ? 'demo-customized-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         variant="contained"
//         disableElevation
//         style={{ width: 80 }}
//         onClick={handleClick}
//         endIcon={<KeyboardArrowDownIcon />}
//       >
//         {pageSize}
//       </Button>
//       <StyledMenu
//         id="demo-customized-menu"
//         MenuListProps={{
//           'aria-labelledby': 'demo-customized-button',
//         }}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//       >
//         <MenuItem
//           onClick={() => {
//             setPageSize(1);
//             handleClick();
//             pageChange();
//           }}
//           disableRipple
//         ></MenuItem>
//         <MenuItem
//           onClick={() => {
//             setPageSize(2);
//             handleClick();
//             pageChange();
//           }}
//           disableRipple
//         >
//           2
//         </MenuItem>
//         <MenuItem
//           onClick={() => {
//             setPageSize(5);
//             handleClick();
//             pageChange();
//           }}
//           disableRipple
//         >
//           5
//         </MenuItem>

//         <MenuItem
//           onClick={() => {
//             setPageSize(10);
//             handleClick();
//             pageChange();
//           }}
//           disableRipple
//         >
//           10
//         </MenuItem>
//       </StyledMenu>

//       <Pagination
//         count={Math.ceil(paggination.count / pageSize)}
//         variant="outlined"
//         shape="rounded"
//         color="secondary"
//         sx={{
//           backgroundColor: Colors.white,
//           '& 	.Mui-focusVisiblet': {},
//         }}
//         onChange={pageChange}
//       />
//     </Stack>
//   </Container>
//           <Container sx={{ pb: 2 }}>
//             <Stack
//               direction="row"
//               justifyContent="center"
//               alignItems="flex-start"
//               spacing={1}
//               sx={{ flexGrow: 1 }}
//             >
//               <Grid container rowSpacing={3} columnSpacing={13}>
//                 {pagginationData.map((product, index) => (
//                   <Grid item xs={4} key={index}>
//                     <Card
//                       width="150"
//                       height="150"
//                       style={{ border: 'none', boxShadow: 'none' }}
//                       sx={{
//                         border: 'none',
//                         '&:hover': {
//                           color: 'gray',
//                         },
//                       }}
//                     >
//                       {' '}
//                       <Paper
//                         elevation={24}
//                         style={{
//                           border: 'none',
//                           '&:hover': {
//                             elevation: '2',
//                           },
//                         }}
//                       >
//                         <Link
//                           to={`/products/sport/${product._id}`}
//                           style={{ textDecoration: 'none' }}
//                         >
//                           <CardMedia
//                             image={product.img}
//                             component="img"
//                             height="200"
//                             alt={product.name}
//                             width="200"
//                             sx={{ border: 'none' }}
//                           />
//                         </Link>

//                         <CardContent sx={{ border: 'none' }}>
//                           <Link
//                             to={`/products/sport/${product._id}`}
//                             style={{ textDecoration: 'none' }}
//                           >
//                             <Typography
//                               sx={{ pt: 4 }}
//                               align="center"
//                               variant="body2"
//                               color={Colors.info}
//                             >
//                               New
//                             </Typography>
//                             <Typography
//                               align="center"
//                               variant="body2"
//                               sx={{ fontSize: 19 }}
//                               color={Colors.dark}
//                             >
//                               {product.description}
//                             </Typography>
//                             <Typography
//                               sx={{ fontSize: 12, pt: 1 }}
//                               align="center"
//                               variant="body2"
//                               color="text.secondary"
//                             >
//                               КОЖЕНО МАРАТОНКИ PARKOUR
//                             </Typography>
//                             <Typography
//                               sx={{ pt: 1 }}
//                               align="center"
//                               variant="body2"
//                               color={Colors.dark}
//                             >
//                               {product.price}.00 ЛВ
//                             </Typography>
//                           </Link>
//                         </CardContent>
//                       </Paper>
//                     </Card>
//                   </Grid>
//                 ))}
//               </Grid>
//             </Stack>
//           </Container>
//         </ThemeProvider>
//       )}
//     </>
//   );
// };

// export default SportProducts;
// //

// import React from 'react';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import CardMedia from '@mui/material/CardMedia';
// import Card from '@mui/material/Card';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect, useState } from 'react';
// import {
//   addProduct,
//   decrement,
//   increment,
// } from '../../../app/features/cartSlice';

// const CartBody = () => {
//   const [products, setProducts] = useState([]);
//   const [quantity, SetQuantity] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();
//   const cartProducts = useSelector((state) => state.cart.products);
//   const cartQuantity = useSelector((state) => state.cart.quantity);
//   const cartTotal = useSelector((state) => state.cart.total);
//   console.log(cartProducts);

//   const handleQuantity = (type) => {
//     if (type === 'dec') {
//       quantity > 1 && SetQuantity(quantity - 1);
//     } else {
//       SetQuantity(quantity + 1);
//     }
//   };

//   // for fixing

//   useEffect(() => {
//     setProducts(cartProducts);
//     setLoading(false);
//   }, [products, setProducts, cartProducts]);
//   const showLoading = <Typography>Loading....</Typography>;

//   return (
//     <>
//       {loading ? (
//         showLoading
//       ) : (
//         <Stack
//           direction="column"
//           justifyContent="center"
//           alignItems="center"
//           spacing={2}
//         >
//           <Stack sx={{ flex: 0.1 }}>
//             <Typography variant="h4">YOUR BAG</Typography>
//           </Stack>
//           <Stack
//             direction="row"
//             justifyContent="space-between"
//             alignItems="center"
//             spacing={2}
//             sx={{ flex: 1, width: '100%' }}
//           >
//             <Stack sx={{ ml: 5 }}>
//               <Stack>
//                 <Button>COUTINIUE SHOPPING </Button>
//               </Stack>
//             </Stack>
//             <Stack direction="row">
//               <Stack>
//                 <Button>COUTINIUE SHOPPING </Button>
//               </Stack>
//               <Stack>
//                 <Button>COUTINIUE SHOPPING </Button>
//               </Stack>
//             </Stack>
//             <Stack>
//               <Stack sx={{ mr: 5 }}>
//                 <Button>COUTINIUE SHOPPING </Button>
//               </Stack>
//             </Stack>
//           </Stack>
//           <Stack>
//             {' '}
//             <Stack>
//               {' '}
//               <Stack
//                 direction="column"
//                 justifyContent="center"
//                 alignItems="center"
//                 spacing={2}
//                 sx={{ flex: 1.7, width: '100%', pr: 2 }}
//               >
//                 <Typography variant="h4">ORDER SUMMARY</Typography>
//                 <Stack
//                   direction="row"
//                   justifyContent="space-between"
//                   alignItems="center"
//                   spacing={2}
//                   sx={{ width: '100%' }}
//                 >
//                   <Typography>Subtotal:</Typography>
//                   <Typography>80 лв</Typography>
//                 </Stack>
//                 <Stack
//                   direction="row"
//                   justifyContent="space-between"
//                   alignItems="center"
//                   spacing={2}
//                   sx={{ width: '100%' }}
//                 >
//                   <Typography>Shipping cost:</Typography>
//                   <Typography>6 лв</Typography>
//                 </Stack>
//                 <Stack
//                   direction="row"
//                   justifyContent="space-between"
//                   alignItems="center"
//                   spacing={2}
//                   sx={{ width: '100%' }}
//                 >
//                   <Typography>Shipping discount:</Typography>
//                   <Typography>0 лв</Typography>
//                 </Stack>
//                 <Stack
//                   direction="row"
//                   justifyContent="space-between"
//                   alignItems="center"
//                   spacing={2}
//                   sx={{ width: '100%' }}
//                 >
//                   <Typography>Total</Typography>
//                   <Typography>80 лв</Typography>
//                 </Stack>
//                 <Stack
//                   direction="row"
//                   justifyContent="space-between"
//                   alignItems="center"
//                   spacing={2}
//                   sx={{ width: '100%' }}
//                 >
//                   <Button variant="outlined" sx={{ width: '90%', ml: 2 }}>
//                     Checkout Now
//                   </Button>
//                 </Stack>
//               </Stack>
//             </Stack>
//             <Stack>
//               {products.map((cartProduct) => (
//                 <Stack
//                   direction="row"
//                   justifyContent="center"
//                   alignItems="flex-start"
//                   spacing={2}
//                   sx={{ flex: 6, width: '100%' }}
//                 >
//                   <Stack
//                     direction="row"
//                     justifyContent="space-between"
//                     alignItems="center"
//                     spacing={2}
//                     sx={{ flex: 5 }}
//                   >
//                     <Stack sx={{ p: 3 }}>
//                       <Card>
//                         <CardMedia
//                           component="img"
//                           height="150"
//                           width="150"
//                           image={cartProduct.img}
//                           alt={cartProduct.description}
//                           sx={{ width: '150' }}
//                         />
//                       </Card>
//                     </Stack>
//                     <Stack
//                       alignItems="flex-start"
//                       justifyContent="flex-start"
//                       spacing={3.5}
//                     >
//                       <Stack direction="row">
//                         <Typography>Product Name: </Typography>
//                         <Typography>{cartProduct.name}</Typography>
//                       </Stack>
//                       <Stack direction="row">
//                         <Typography>ID: </Typography>
//                         <Typography> 234</Typography>
//                       </Stack>
//                       <Stack direction="row">
//                         <Typography>COLOR: </Typography>
//                         <Typography> {cartProduct.color} </Typography>
//                       </Stack>
//                       <Stack direction="row">
//                         <Typography>SIZE: </Typography>
//                         <Typography> {cartProduct.size} </Typography>
//                       </Stack>
//                     </Stack>
//                     <Stack>
//                       <Stack
//                         justifyContent="center"
//                         alignItems="flex-end"
//                         spacing={2}
//                         direction="column"
//                       >
//                         <Stack direction="row" spacing={2}>
//                           <Button
//                             size="small"
//                             variant="outlined"
//                             onClick={() => dispatch(increment())}
//                           >
//                             +
//                           </Button>

//                           <Typography> </Typography>
//                           <Button
//                             size="small"
//                             variant="outlined"
//                             onClick={() => dispatch(decrement())}
//                           >
//                             -
//                           </Button>
//                         </Stack>
//                         <Stack>
//                           <Stack direction="row" justifyContent="flex-start">
//                             Quantity: {cartProduct.quantity}
//                           </Stack>
//                           <Stack direction="row" justifyContent="flex-start">
//                             Price: {cartProduct.price}
//                           </Stack>
//                           <Stack direction="row" justifyContent="flex-start">
//                             Price: {cartProduct.price * cartProduct.quantity}
//                           </Stack>
//                         </Stack>
//                       </Stack>
//                     </Stack>
//                   </Stack>
//                 </Stack>
//               ))}
//             </Stack>
//           </Stack>
//         </Stack>
//       )}
//     </>
//   );
// };

// export default CartBody;
