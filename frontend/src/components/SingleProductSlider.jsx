import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
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
        sx={{ flex: 1 }}
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Button>23</Button>
        <Button>23</Button>
      </Stack>
      <Stack sx={{ flex: 3 }} direction="column">
        <Box sx={{ width: 450, height: 650, flexGrow: 1 }}>
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
                sx={{ color: Colors.black, left: 45, bottom: 250 }}
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
                sx={{ color: Colors.black, right: 95, bottom: 250 }}
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
