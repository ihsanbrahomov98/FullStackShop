import React from 'react';
import Navbar from '../../components/Navbar';
import Slider from '../../components/Slider';
import Cards from '../../components/Cards';
import ListItems from '../../components/ListItems';
import Counter from '../../app/features/Counter';
import CopywritingLine from '../../components/CopywritingLine';
import CardsUnderSlider from '../../components/CardsUnderSlider';
import SubscribeToUs from '../../components/SubscribeToUs';
import Footer from '../../components/Footer';

import { Container } from '@mui/system';

import TopNavbar from './../../components/TopNavbar';
import LineUnderTheSliderAndCards from '../../components/LineUnderTheSliderAndCards';
import FixedCricles from './../../components/FixedCricles';
const Home = () => {
  return (
    <>
      <FixedCricles />
      <TopNavbar />
      <Navbar />
      <Slider />
      <CardsUnderSlider />
      <LineUnderTheSliderAndCards />

      <SubscribeToUs />

      <Footer />
      {/* <Counter /> */}
      <CopywritingLine />
    </>
  );
};

export default Home;
