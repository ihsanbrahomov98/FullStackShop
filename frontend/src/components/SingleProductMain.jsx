import {
  Stack,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import BoxForColor from './categories/BoxForColor';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { addProduct, addTooCart } from '../app/features/cartSlice';
import { ShopAddButton } from './styles/SingleProductMain';
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DropDownMenu from './DropDownMenu';
import { Colors } from './styles/theme';
import DropDownMenuFreeShipping from './DropDownMenuFreeShipping';
import SingleProductSlider from './SingleProductSlider';
import { SmallButton } from './styles/SingleProductStyles';
import { styled } from '@mui/material/styles';

import '@fontsource/montez';
import { borderColor } from 'polished';

const ColorBoxes = styled(Box)((props) => ({
  display: 'flex',

  justifyContent: 'center',
  alignItems: 'center',
  width: 30,
  textDecoration: 'none',
  fontWeight: 'bold',
  height: 30,
  color: 'black',
  backgroundColor: props.sizeItem,
}));

const STRIPE_KEY =
  'pk_test_51L5XfCGhswhFxp1SnSWMxrXia8K8TDik4CV8zMmQT1Es3VdYofPdgdYEFzkgqOnPVpYSQf0sEOejlIvKOb9BwSxK00jTVKbULQ';

const SingleProductMain = ({}) => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [loading, Setloading] = useState(true);
  const [quantity, SetQuantity] = useState(1);
  const [items, SetItems] = useState([]);
  const [color, setColor] = useState('white');

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get(`/back/mock/api/findone/${params.id}`);
      setProducts(data);
      setColor(data.color[0]);
      Setloading(false);
    };
    fetchproducts();
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
  }, [stripeToken, navigate, color]);
  const showLoading = <Typography>Loading....</Typography>;

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && SetQuantity(quantity - 1);
    } else {
      SetQuantity(quantity + 1);
      handleClick();
    }
  };
  const handleClick = () => {
    dispatch(addProduct({ ...products, quantity, color }));
  };
  // size and color
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Container sx={{ pt: 6, pb: 20 }}>
        {loading ? (
          showLoading
        ) : (
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={6}
            sx={{ height: 450 }}
            posotion="relative"
          >
            <Stack
              posotion="relative"
              direction="column"
              justifyContent="center"
              alignItems="space-between"
              sx={{ flex: 3, height: 700 }}
            >
              <SingleProductSlider />
            </Stack>

            <Stack direction="column" sx={{ flex: 1.2 }}>
              {/* First Stack Begin */}
              <Stack
                justifyContent="space-between"
                direction="row"
                sx={{ pb: 3 }}
              >
                <Box direction="column">
                  <Box>
                    <Typography sx={{ fontSize: 10, fontWeight: 'thin' }}>
                      {' '}
                      X-Ray Speed Lite Jr
                    </Typography>
                  </Box>
                  <Box>
                    {' '}
                    <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>
                      {' '}
                      Обувка{' '}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 'bold' }}> PUMA</Typography>
                </Box>
              </Stack>
              {/* First Stack End */}

              {/* Second Stack Begin */}
              <Stack justifyContent="space-between" direction="row">
                <Box direction="column">
                  <Box justifyContent="flex-start">
                    <SmallButton sx={{ width: 5, height: 25 }}>
                      {' '}
                      new{' '}
                    </SmallButton>
                  </Box>
                  <Box>
                    {' '}
                    <Typography sx={{ fontWeight: 'bold' }}>
                      {' '}
                      {products.price}.00 ЛВ{' '}
                    </Typography>
                  </Box>
                </Box>
                <Stack>
                  <Stack direction="row">
                    <Typography sx={{ fontSize: 10, fontWeight: 'thin' }}>
                      Информация за остъпки
                    </Typography>
                    <span> &nbsp; </span>
                    <Typography sx={{ fontSize: 10, fontWeight: 'bold' }}>
                      Ihsan.bg
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>

              {/* Second Stack End */}
              {/* Third Stack Begins */}
              <Stack
                spacing={2}
                justifyContent="space-between"
                direction="column"
                alignItems="flex-start"
              >
                <Divider flexItem />
                <Typography align="left" variant="h4" sx={{ fontSize: 14 }}>
                  Налични размери/изберете размер
                </Typography>
                <ToggleButtonGroup
                  color={Colors.black}
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  {products.size.map((item) => (
                    <ToggleButton
                      color="secondary"
                      value={item}
                      aria-label={item}
                    >
                      {item}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Stack>
              {/* Third Stack ENds */}

              <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
              >
                <Divider flexItem />
                <Typography align="left" variant="h4" sx={{ fontSize: 14 }}>
                  Налични цветове/изберете цвят
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  spacing={2}
                  sx={{ width: '100%' }}
                >
                  <Stack direction="row" spacing={1}>
                    {products.color.map((sizeItem) => (
                      <ColorBoxes
                        style={{ textDecoration: 'none' }}
                        sx={{ borderColor: Colors.black, border: 0.5 }}
                        onClick={() => {
                          setColor(sizeItem);
                        }}
                        sizeItem={sizeItem}
                      ></ColorBoxes>
                    ))}
                  </Stack>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  {' '}
                  <Typography sx={{ fontSize: 13.7 }}>Избран:</Typography>
                  <span> &nbsp; </span>
                  <span> &nbsp; </span>
                  <span> &nbsp; </span>
                  <span> &nbsp; </span>
                  <span> &nbsp; </span>
                  <span> &nbsp; </span>
                  <span> &nbsp; </span>
                  <ColorBoxes
                    style={{ textDecoration: 'none' }}
                    sx={{ borderColor: Colors.black, border: 0.5 }}
                    sizeItem={color}
                  ></ColorBoxes>
                </Stack>
                <Divider flexItem />
              </Stack>

              {/* SIZE STACK */}

              {/* SIZE STACK END */}
              {/* Fourth Stack Begins */}
              <Stack
                justifyContent="space-between"
                direction="row"
                sx={{ pb: 3, pt: 2 }}
              >
                <Box direction="column">
                  <Box>
                    <ShopAddButton onClick={() => handleQuantity('inc')}>
                      <Typography variant="h4" sx={{ fontSize: 10 }}>
                        Добави в кошмицата
                      </Typography>
                    </ShopAddButton>
                  </Box>
                </Box>
                <Box>
                  <ShopAddButton onClick={() => handleQuantity('dec')}>
                    <Typography variant="h4" sx={{ fontSize: 10 }}>
                      Премахни продукт
                    </Typography>
                  </ShopAddButton>
                </Box>
              </Stack>
              {/* Fourth Stack END */}
              {/* Fifth Stack Begin */}
              <Stack>
                <DropDownMenu />
              </Stack>
              <Divider flexItem />
              <Stack>
                <DropDownMenuFreeShipping />
              </Stack>
            </Stack>
          </Stack>
        )}
        ;
      </Container>
    </>
  );
};

export default SingleProductMain;
