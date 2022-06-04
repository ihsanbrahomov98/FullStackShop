import { Stack, Box, Typography } from '@mui/material';
import React from 'react';
import SingleCard from './SingleCard';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../app/features/counterSlice';
import SingleProductSlider from './SingleProductSlider';
import StripeCheckout from 'react-stripe-checkout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const STRIPE_KEY =
  'pk_test_51L5XfCGhswhFxp1SnSWMxrXia8K8TDik4CV8zMmQT1Es3VdYofPdgdYEFzkgqOnPVpYSQf0sEOejlIvKOb9BwSxK00jTVKbULQ';

const SingleProductMain = ({}) => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [loading, Setloading] = useState(true);

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get(`/back/mock/api/findone/${params.id}`);
      setProducts(data);
      console.log('single');
      console.log(products);
    };
    fetchproducts();
    alert(products);
    Setloading(false);
  }, []);

  // const product = products.find((p)=> p._id === match.params.id);
  const [stripeToken, SetStripeToken] = useState(null);
  const navigate = useNavigate();
  const count = useSelector((state) => state.counter.value);
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
            <SingleCard />
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
              <Typography varian="h6">{products.description}</Typography>
            </Stack>

            <Box sx={{ flex: 1 }}>
              <Button
                size="small"
                variant="outlined"
                onClick={() => dispatch(increment())}
              >
                +
              </Button>

              <Button size="small" variant="outlined">
                {count}
              </Button>

              <Button
                size="small"
                variant="outlined"
                onClick={() => dispatch(decrement())}
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
                <Button size="large" variant="outlined">
                  Buy
                </Button>
              </StripeCheckout>
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
