import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addProduct } from '../../../app/features/cartSlice';

const CartBody = () => {
  const [products, setProducts] = useState([]);
  const [quantity, SetQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);
  const cartQuantity = useSelector((state) => state.cart.quantity);
  console.log(cartProducts);

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && SetQuantity(quantity - 1);
    } else {
      SetQuantity(quantity + 1);
    }
    dispatch(addProduct({ ...products, quantity }));
  };

  // for fixing

  useEffect(() => {
    setProducts(cartProducts);
    setLoading(false);
  }, [products, setProducts, cartProducts]);
  const showLoading = <Typography>Loading....</Typography>;

  return (
    <>
      {loading ? (
        showLoading
      ) : (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Stack sx={{ flex: 0.1 }}>
            <Typography variant="h4">YOUR BAG</Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={{ flex: 1, width: '100%' }}
          >
            <Stack sx={{ ml: 5 }}>
              <Stack>
                <Button>COUTINIUE SHOPPING </Button>
              </Stack>
            </Stack>
            <Stack direction="row">
              <Stack>
                <Button>COUTINIUE SHOPPING </Button>
              </Stack>
              <Stack>
                <Button>COUTINIUE SHOPPING </Button>
              </Stack>
            </Stack>
            <Stack>
              <Stack sx={{ mr: 5 }}>
                <Button>COUTINIUE SHOPPING </Button>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            {' '}
            <Stack>
              {' '}
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ flex: 1.7, width: '100%', pr: 2 }}
              >
                <Typography variant="h4">ORDER SUMMARY</Typography>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                  sx={{ width: '100%' }}
                >
                  <Typography>Subtotal:</Typography>
                  <Typography>80 лв</Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                  sx={{ width: '100%' }}
                >
                  <Typography>Shipping cost:</Typography>
                  <Typography>6 лв</Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                  sx={{ width: '100%' }}
                >
                  <Typography>Shipping discount:</Typography>
                  <Typography>0 лв</Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                  sx={{ width: '100%' }}
                >
                  <Typography>Total</Typography>
                  <Typography>80 лв</Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                  sx={{ width: '100%' }}
                >
                  <Button variant="outlined" sx={{ width: '90%', ml: 2 }}>
                    Checkout Now
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            <Stack>
              {products.map((cartProduct) => (
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="flex-start"
                  spacing={2}
                  sx={{ flex: 6, width: '100%' }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    sx={{ flex: 5 }}
                  >
                    <Stack sx={{ p: 3 }}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="150"
                          width="150"
                          image={cartProduct.img}
                          alt={cartProduct.description}
                          sx={{ width: '150' }}
                        />
                      </Card>
                    </Stack>
                    <Stack
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={3.5}
                    >
                      <Stack direction="row">
                        <Typography>Product Name: </Typography>
                        <Typography>{cartProduct.name}</Typography>
                      </Stack>
                      <Stack direction="row">
                        <Typography>ID: </Typography>
                        <Typography> 234</Typography>
                      </Stack>
                      <Stack direction="row">
                        <Typography>COLOR: </Typography>
                        <Typography> {cartProduct.color} </Typography>
                      </Stack>
                      <Stack direction="row">
                        <Typography>SIZE: </Typography>
                        <Typography> {cartProduct.size} </Typography>
                      </Stack>
                    </Stack>
                    <Stack>
                      <Stack
                        justifyContent="center"
                        alignItems="flex-end"
                        spacing={2}
                        direction="column"
                      >
                        <Stack direction="row" spacing={2}>
                          <Button
                            size="small"
                            variant="outlined"
                            onClick={() => handleQuantity('inc')}
                          >
                            +
                          </Button>

                          <Typography> </Typography>
                          <Button
                            size="small"
                            variant="outlined"
                            onClick={() => handleQuantity('dec')}
                          >
                            -
                          </Button>
                        </Stack>
                        <Stack>
                          <Stack direction="row" justifyContent="flex-start">
                            Price: {cartProduct.price}
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default CartBody;
