import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import { useLocation, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const navigate = useNavigate();
  //  more work is
  const relocate = () => {};

  return (
    <Box sx={{ width: 150, height: 500, flexGrow: 1, p: 3 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {products.map((step, index, product) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Link to={`/products/${locationParams}/${step._id}`}>
                <Box
                  onClick={relocate()}
                  component="img"
                  sx={{
                    height: 250,
                    display: 'block',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.img}
                  alt={step.label}
                />
              </Link>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SingleProductSlider;
