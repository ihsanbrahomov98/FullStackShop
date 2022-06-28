import React from 'react';
import Navbar from '../../components/Navbar';
import Slider from '../../components/Slider';
import Cards from '../../components/Cards';
import ListItems from '../../components/ListItems';
import Counter from '../../app/features/Counter';
import ManBotLine from '../../components/CopywritingLine';
import CardsUnderSlider from '../../components/CardsUnderSlider';
import SubscribeToUs from '../../components/SubscribeToUs';
import Footer from '../../components/Footer';

import { Container } from '@mui/system';

import TopNavbar from './../../components/TopNavbar';
import LineUnderTheSliderAndCards from '../../components/LineUnderTheSliderAndCards';
const Home = () => {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <Slider />
      <CardsUnderSlider />
      <LineUnderTheSliderAndCards />

      <SubscribeToUs />

      <Footer />
      <Counter />
      <ManBotLine />
    </>
  );
};

export default Home;
