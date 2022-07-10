import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import ShareIcon from '@mui/icons-material/Share';

import Stack from '@mui/material/Stack';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import { useLocation, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Colors } from './styles/theme';
import './Slider/Slider.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, Typography } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SingleProductSlider() {
  const [products, setProducts] = useState([]);
  const [locationParams, setLocationParams] = useState('');
  let location = useLocation();

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const { data } = await axios.get(
          `/back/mock/api/findallcat/${locationParams}`
        );
        setProducts(data);
        console.log(data);
        if (!products) {
          const { data } = await axios.get(
            `/back/mock/api/findallcat/${locationParams}`
          );
          setProducts(data);
          console.log(data);
        }
      } catch (error) {}
    };
    fetchAll();
  }, [locationParams]);
  useEffect(() => {
    const locationFunc = async () => {
      try {
        setLocationParams(location.pathname.split('/')[2]);
      } catch (error) {}
    };
    locationFunc();
  }, []);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = products.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === maxSteps - 1) {
      setActiveStep(0);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    if (activeStep === 0) {
      setActiveStep(maxSteps - 1);
    }
  };

  const onlyFourItems = products.slice(0, 4);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="space-between"
    >
      <Stack
        sx={{
          flex: 1.5,
          left: 200,
          display: {
            lg: 'flex',
            thousand: 'flex',
            md950: 'flex',
            md: 'flex',
            sm750: 'none',
            xs: 'none',
          },
        }}
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        posotion="absolute"
      >
        <Grid direction="column" container spacing={3}>
          {onlyFourItems.map((step, index) => (
            <Grid item xs={1}>
              <Card
                disableUnderline
                sx={{ width: 85 }}
                onClick={() => setActiveStep(index)}
              >
                <CardMedia
                  component="img"
                  height="150"
                  width="20"
                  image={step.img}
                  //  step.img
                  alt={step.name}
                />
              </Card>
            </Grid>
          ))}
          <Stack sx={{ height: 20 }}></Stack>
          <Button
            sx={{
              color: Colors.black,
              width: 150,

              fontSize: 21,
              '&:hover': {
                backgroundColor: 'white',
              },
            }}
            variant="text"
            disableRipple
            endIcon={<ShareIcon />}
          >
            Сподели{' '}
          </Button>
        </Grid>
      </Stack>
      <Stack
        sx={{ flex: 3, width: { lg: 450, thousand: 450, md: 350 } }}
        direction="column"
      >
        <Box
          sx={{
            width: { lg: 450, thousand: 450, md: 350 },
            height: 650,
            flexGrow: 1,
          }}
        >
          <SwipeableViews
            className="slider"
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            sx={{ color: Colors.black }}
          >
            {products.map((step, index, product) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Link to={`/products/${locationParams}/${step._id}`}>
                    <Box
                      position="relative"
                      component="img"
                      sx={{
                        height: 455,
                        display: 'block',
                        overflow: 'hidden',
                        width: '90%',
                      }}
                      src={step.img}
                      // step.img
                      alt={step.label}
                    />
                  </Link>
                ) : null}
              </div>
            ))}
          </SwipeableViews>

          <MobileStepper
            className="slider"
            ps={maxSteps}
            position="absolute"
            nextButton={
              <Button
                disableFocusRipple
                disableRipple
                position="absolute"
                sx={{
                  color: Colors.black,
                  left: { thousand: 0, md: 50, sm: 40 },
                  bottom: 250,
                }}
                size="small"
                onClick={handleNext}
              >
                {theme.direction === 'rtl' ? (
                  <ArrowForwardIosIcon fontSize={'large'} />
                ) : (
                  <ArrowForwardIosIcon fontSize={'large'} />
                )}
              </Button>
            }
            backButton={
              <Button
                disableFocusRipple
                disableRipple
                sx={{
                  color: Colors.black,
                  right: { thousand: 0, md: 50, sm: 40, xs: 30 },
                  bottom: 250,
                }}
                size="small"
                onClick={handleBack}
              >
                {theme.direction === 'rtl' ? (
                  <ArrowBackIosIcon fontSize={'large'} />
                ) : (
                  <ArrowBackIosIcon fontSize={'large'} />
                )}
              </Button>
            }
          />
        </Box>
      </Stack>
    </Stack>
  );
}

export default SingleProductSlider;
