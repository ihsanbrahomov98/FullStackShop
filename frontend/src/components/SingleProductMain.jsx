import {
  Stack,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../app/features/counterSlice';
import SingleProductSlider from './SingleProductSlider';
import StripeCheckout from 'react-stripe-checkout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { addProduct, addTooCart } from '../app/features/cartSlice';

const STRIPE_KEY =
  'pk_test_51L5XfCGhswhFxp1SnSWMxrXia8K8TDik4CV8zMmQT1Es3VdYofPdgdYEFzkgqOnPVpYSQf0sEOejlIvKOb9BwSxK00jTVKbULQ';

const SingleProductMain = ({}) => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [loading, Setloading] = useState(true);
  const [quantity, SetQuantity] = useState(1);
  const [items, SetItems] = useState([]);

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get(`/back/mock/api/findone/${params.id}`);
      setProducts(data);
    };
    fetchproducts();

    Setloading(false);
  }, []);

  // const product = products.find((p)=> p._id === match.params.id);
  const [stripeToken, SetStripeToken] = useState(null);
  const navigate = useNavigate();
  const itemQuantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();
  const onToken = (token) => {
    SetStripeToken(token);
  };
  useEffect(() => {
    const request = async () => {
      try {
        const res = await axios.post('localhost:5550/back/stripe/payment', {
          tokenId: stripeToken.id,
          amount: 25000,
        });
        console.log(res.data);
        navigate('/', { replace: true });
      } catch (error) {
        alert(error);
      }
    };
    stripeToken && request();
  }, [stripeToken, navigate]);
  const showLoading = <Typography>Loading....</Typography>;

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && SetQuantity(quantity - 1);
    } else {
      SetQuantity(quantity + 1);
    }
  };
  const handleClick = () => {
    dispatch(addProduct({ ...products, quantity }));
  };

  return (
    <>
      {loading ? (
        showLoading
      ) : (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={6}
          sx={{ mb: -5, height: 450 }}
        >
          <Stack sx={{ flex: 1, height: 450 }}>
            <Card>
              <CardMedia
                component="img"
                height="240"
                image={products.img}
                alt={products.name}
              />
              <CardContent sx={{ bgcolor: 'secondary.main' }}>
                <Typography align="center" color="common.white">
                  {products.description}
                </Typography>
              </CardContent>
            </Card>
          </Stack>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ flex: 1, height: 700 }}
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={1}
              sx={{ flex: 1 }}
            >
              <Typography varian="h4">{products.name}</Typography>
              <Typography varian="h6">{products.price} лв</Typography>
            </Stack>

            <Box sx={{ flex: 1 }}>
              <Button
                size="small"
                variant="outlined"
                onClick={() => handleQuantity('inc')}
              >
                +
              </Button>

              <Button size="small" variant="outlined">
                {quantity}
              </Button>

              <Button
                size="small"
                variant="outlined"
                onClick={() => handleQuantity('dec')}
              >
                -
              </Button>
            </Box>

            <Box sx={{ flex: 0.2 }}>
              <StripeCheckout
                name="ihsanShop"
                image="https://eobuvki.bg/img/img_e_shop/thumbs/p_1007045_3.jpg"
                billingAddress
                shippingAddress
                description
                amount={25000}
                token={onToken}
                stripeKey={STRIPE_KEY}
              >
                <Button size="large" variant="outlined"></Button>
              </StripeCheckout>
              <Button onClick={handleClick} size="large" variant="outlined">
                Buy
              </Button>
            </Box>
            <Box sx={{ flex: 1 }}></Box>
            <Box sx={{ flex: 4 }}></Box>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ flex: 2, height: 500, width: 500 }}
          >
            <SingleProductSlider />
          </Stack>
        </Stack>
      )}
      ;
    </>
  );
};

export default SingleProductMain;
