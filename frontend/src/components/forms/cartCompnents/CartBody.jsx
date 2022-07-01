import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  addProduct,
  decrement,
  increment,
} from '../../../app/features/cartSlice';
import Container from '@mui/material/Container';
import TopNavbar from '../../TopNavbar';
import Navbar from '../../Navbar';
import Breadcrumbs from './Breadcrumbs';
import Divider from '@mui/material/Divider';

const CartBody = () => {
  const [products, setProducts] = useState([]);
  const [quantity, SetQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);
  const cartQuantity = useSelector((state) => state.cart.quantity);
  const cartTotal = useSelector((state) => state.cart.total);
  console.log(cartProducts);

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && SetQuantity(quantity - 1);
    } else {
      SetQuantity(quantity + 1);
    }
  };

  // for fixing

  useEffect(() => {
    setProducts(cartProducts);
    setLoading(false);
  }, [products, setProducts, cartProducts]);
  const showLoading = <Typography>Loading....</Typography>;

  return (
    <>
      <TopNavbar />
      <Navbar />
      <Stack height={10}></Stack>
      <Container>
        <Breadcrumbs />
      </Container>
      <Container>
        <Stack height={10}></Stack>
        <Divider />
      </Container>
      <Container>
        <Stack></Stack>
      </Container>
    </>
  );
};

export default CartBody;
