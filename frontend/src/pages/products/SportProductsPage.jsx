import React from 'react';
import Navbar from '../../components/Navbar';
import BlackLine from '../../components/BlackLine';

import SubscribeToUs from '../../components/SubscribeToUs';
import ManBotListItems from '../../components/ManBotListItems';
import ManBotLine from '../../components/CopywritingLine';

import SportProducts from './../../components/categories/SportProducts';
import Footer from './../../components/Footer';
import CardsUnderSlider from '../../components/CardsUnderSlider';
import LineUnderTheSliderAndCards from '../../components/LineUnderTheSliderAndCards';

const SportProductsPage = () => {
  return (
    <>
      <Navbar />

      <SportProducts />
      <LineUnderTheSliderAndCards />

      <SubscribeToUs />
      <Footer />

      <ManBotLine />
    </>
  );
};

export default SportProductsPage;
