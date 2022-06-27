import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Container } from '@mui/system';
import { Colors } from './styles/theme';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: 'https://eobuvki.bg/img/img_e_shop/thumbs/p_1007054_3.jpg',
  },
  {
    label: 'Bird',
    imgPath: 'https://eobuvki.bg/img/img_e_shop/thumbs/p_1007050_3.jpg',
  },
  {
    label: 'Bali, Indonesia',
    imgPath: 'https://eobuvki.bg/img/img_e_shop/thumbs/p_1007045_3.jpg',
  },
  {
    label: 'Goč, Serbia',
    imgPath: 'https://eobuvki.bg/img/img_e_shop/thumbs/p_11540_3.jpg',
  },
];

function Slider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
    <Container>
      <Box sx={{ width: 1, height: 400, flexGrow: 1, pt: 1.5 }}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 500,
                    display: 'block',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          className="slider"
          ps={maxSteps}
          position="absolute"
          nextButton={
            <Button
              disableFocusRipple
              disableRipple
              position="absolute"
              sx={{ color: Colors.black, left: 10, bottom: 265 }}
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
              sx={{ color: Colors.black, right: 10, bottom: 265 }}
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
    </Container>
  );
}

export default Slider;
