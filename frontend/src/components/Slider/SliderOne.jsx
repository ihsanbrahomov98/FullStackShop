import * as React from 'react';
import Slider from '@mui/material/Slider';
import './Slider.css';

export default function SliderOne() {
  return (
    <div>
      <Slider defaultValue={30} />
      <Slider defaultValue={30} className="slider" />
    </div>
  );
}
