import React from 'react';
import Stack from '@mui/material/Stack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { useSelector, useDispatch } from 'react-redux';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import MessageIcon from '@mui/icons-material/Message';
import {
  removeItem,
  removeProductFromCart,
  increase,
  decreaseQuantity,
  decrease,
  removeProduct,
} from '../../../app/features/cartSlice';
import Container from '@mui/material/Container';
import TopNavbar from '../../TopNavbar';
import LineUnderTheSliderAndCards from '../../LineUnderTheSliderAndCards';
import SubscribeToUs from '../../LineUnderTheSliderAndCards';
import Footer from '../../Footer';
import ManBotLine from '../../CopywritingLine';
import FixedCricles from '../../FixedCricles';
import Navbar from '../../Navbar';
import Breadcrumbs from './Breadcrumbs';
import Divider from '@mui/material/Divider';
import { Colors } from '../../styles/theme';
import {
  CartButtonOrange,
  CartButtonBlack,
  CartButtonDelete,
  CartButtonContinueShooping,
} from '../../styles/CartButton';

const CartBody = () => {
  const [products, setProducts] = useState([]);
  const [quantity, SetQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const cartQuantity = useSelector((state) => state.cart.quantity);
  const cartTotal = useSelector((state) => state.cart.total);

  const navigate = useNavigate();

  useEffect(() => {
    setProducts(Array.from(new Set(cartProducts)));
    setLoading(false);
  }, [products, setProducts, cartProducts]);
  const showLoading = <Typography>Loading....</Typography>;

  const scrollToTOP = () => {
    window.scrollTo(0, 0);
  };
  const increaseQuantityOfCartItem = (id) => {
    console.log(id);
    dispatch(increase({ id }));
  };
  const decreaseQuantityOfCartItem = (id) => {
    console.log(id);
    dispatch(decrease({ id }));
  };
  const removeProduct = (id) => {
    dispatch(removeProductFromCart({ id }));
  };
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
        <Stack height={35}></Stack>
      </Container>
      <Container style={{ position: 'relative' }}>
        <FixedCricles />
        <Stack>
          <Typography sx={{ fontSize: 35, fontWeight: 'bold' }}>
            ТВОЯТА КОЛИЧКА
          </Typography>
        </Stack>
        <Stack height={20}></Stack>
        <Stack
          direction={{ xs: 'column', thousand: 'row' }}
          justifyContent="center"
          alignItems={{ xs: 'center', thousand: 'flex-start' }}
          spacing={2}
          width={{ thousand: 950, md: 800, md950: 900 }}
        >
          <Stack
            direction="column"
            justifyContent="center"
            spacing={2}
            sx={{ flex: 5 }}
          >
            <Stack
              spacing={2}
              justifyContent="center"
              alignItems="center"
              direction="row"
              sx={{
                backgroundColor: Colors.grayForCart,
                height: 15,
                p: 2,
                display: { lg: 'flex', thousand: 'flex', xs: 'none' },
              }}
            >
              <Stack sx={{ flex: 2 }}>
                <Typography sx={{ fontWeight: 'bold' }}>Продукт</Typography>
              </Stack>
              <Stack
                sx={{ flex: 2 }}
                justifyContent="space-between"
                alignItems="center"
                direction="row"
              >
                <Typography sx={{ fontWeight: 'bold' }}>Ед. цена</Typography>
                <Typography sx={{ fontWeight: 'bold' }}>Брой</Typography>
                <Typography sx={{ fontWeight: 'bold' }}>Сума</Typography>
              </Stack>
              <Stack sx={{ flex: 1 }}></Stack>
            </Stack>

            {products.map((cartProduct) => (
              <Stack
                spacing={2}
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                sx={{ backgroundColor: Colors.grayForCart, height: 100, p: 2 }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={3}
                >
                  <Stack sx={{ flex: 2 }}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="80"
                        image={cartProduct.img}
                        alt={cartProduct.description}
                        sx={{ width: 100 }}
                      />
                    </Card>
                  </Stack>
                  <Stack
                    justifyContent="space-between"
                    alignItems="flex-start"
                    direction="row"
                    sx={{ flex: 6 }}
                  >
                    <Stack direction="column">
                      <Stack justifyContent="center" alignItems="center">
                        <Typography sx={{ fontWeight: 'bold', pb: 1 }}>
                          {cartProduct.name}
                        </Typography>
                      </Stack>

                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        sx={{ flex: 4, width: 120 }}
                      >
                        <Typography sx={{ fontSize: 12 }}>Марка:</Typography>
                        <Typography sx={{ fontSize: 12 }}>
                          {cartProduct.category}
                        </Typography>
                      </Stack>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="space-between"
                        sx={{ flex: 4, width: 120 }}
                      >
                        <Typography sx={{ fontSize: 12 }}>
                          Доствка до:
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize: 12 }}>
                          22.07.2022
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ flex: 2 }}
                  spacing={0.5}
                >
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography sx={{ fontWeight: 'bold' }}>
                      {cartProduct.price}
                    </Typography>
                  </Stack>
                  <Stack direction="column">
                    <Typography sx={{ fontSize: 10 }}>.99 </Typography>
                    <Typography
                      sx={{ fontSize: 10, color: Colors.orange, ml: 0.2 }}
                    >
                      {' '}
                      ЛВ
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ flex: 2 }}
                  spacing={0.3}
                >
                  <CartButtonBlack
                    onClick={() => {
                      increaseQuantityOfCartItem(cartProduct._id);
                    }}
                    style={{
                      maxWidth: '30px',
                      maxHeight: '30px',
                      minWidth: '30px',
                      minHeight: '30px',
                    }}
                  >
                    +
                  </CartButtonBlack>
                  <Typography
                    sx={{
                      color: Colors.orange,
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
                  >
                    {' '}
                    {cartProduct.amount}
                  </Typography>
                  <CartButtonBlack
                    onClick={() => {
                      decreaseQuantityOfCartItem(cartProduct._id);
                    }}
                    style={{
                      maxWidth: '30px',
                      maxHeight: '30px',
                      minWidth: '30px',
                      minHeight: '30px',
                    }}
                  >
                    -
                  </CartButtonBlack>
                </Stack>
                <Stack sx={{ flex: 2 }}>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{ flex: 2 }}
                    spacing={0.5}
                  >
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography sx={{ fontWeight: 'bold' }}>
                        {cartProduct.price * cartProduct.amount}
                      </Typography>
                    </Stack>
                    <Stack direction="column">
                      <Typography sx={{ fontSize: 10 }}>.99 </Typography>
                      <Typography
                        sx={{ fontSize: 10, color: Colors.orange, ml: 0.2 }}
                      >
                        {' '}
                        ЛВ
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  sx={{ flex: 2 }}
                >
                  <Stack>
                    <CartButtonDelete
                      onClick={() => {
                        removeProduct(cartProduct._id);
                      }}
                      style={{
                        maxWidth: '30px',
                        maxHeight: '30px',
                        minWidth: '30px',
                        minHeight: '30px',
                      }}
                    >
                      {' '}
                      X
                    </CartButtonDelete>
                  </Stack>
                </Stack>
              </Stack>
            ))}
            <Stack sx={{ height: 5 }}></Stack>
            <Divider />
            <Stack sx={{ height: 12 }}></Stack>
            <Stack
              sx={{ display: { lg: 'flex', thousand: 'flex', xs: 'none' } }}
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <CartButtonContinueShooping onClick={() => navigate(-1)}>
                <KeyboardArrowLeftIcon sx={{ fontWeight: 'bold' }} />
                <Typography sx={{ fontWeight: 'bold' }}>
                  Продължи с пазаруването
                </Typography>
              </CartButtonContinueShooping>
            </Stack>
          </Stack>

          <Stack sx={{ flex: 0.3 }}></Stack>

          {/* END OF ITEMS */}
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ borderColor: Colors.black, flex: 1.8 }}
          >
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              sx={{ width: '100%' }}
            >
              <Typography sx={{ fontWeight: 'bold' }}>Добави ваучер</Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              sx={{ width: '100%' }}
            >
              <Typography sx={{ fontWeight: 'bold' }}>
                Въведи ваучер тук
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ width: '100%' }}
            >
              <Stack>
                {' '}
                <Typography sx={{ fontWeight: 'bold' }}>
                  {' '}
                  Междинна сума
                </Typography>
              </Stack>
              <Stack>
                {' '}
                <Typography sx={{ fontWeight: 'bold' }}> 240,96 лв.</Typography>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                width: '100%',
                backgroundColor: Colors.grayForCart,
                p: 1.5,
              }}
            >
              <Stack>
                {' '}
                <Typography sx={{ fontWeight: 'bold' }}> Общо:</Typography>
              </Stack>
              <Stack>
                {' '}
                <Typography sx={{ fontWeight: 'bold' }}>240,96 лв.</Typography>
              </Stack>
            </Stack>
            <CartButtonOrange
              sx={{
                width: { thousand: '100%', md: '75%' },
                height: { thousand: '100%', md: '75%' },
              }}
            >
              <Typography
                sx={{
                  fontSize: { thousand1100: 22, md950: 16, md: 14, xs: 10 },
                  color: Colors.white,
                }}
              >
                {' '}
                КЪМ ЗАВЪРШВАНЕ
              </Typography>
              <ArrowForwardIosIcon sx={{ color: Colors.white }} />
            </CartButtonOrange>
          </Stack>
        </Stack>
      </Container>

      <SubscribeToUs />
      <Footer />

      <ManBotLine />
    </>
  );
};

export default CartBody;
