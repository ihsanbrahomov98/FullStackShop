import React from 'react';
import Navbar from '../../components/Navbar';
import BlackLine from '../../components/BlackLine';

import SubscribeToUs from '../../components/SubscribeToUs';
import ManBotListItems from '../../components/ManBotListItems';
import ManBotLine from '../../components/CopywritingLine';
import WomanProducts from './../../components/categories/WomanProducts';
import Footer from './../../components/Footer';
import LineUnderTheSliderAndCards from '../../components/LineUnderTheSliderAndCards';

const WomanProductsPage = () => {
  return (
    <>
      <Navbar />

      <WomanProducts />
      <LineUnderTheSliderAndCards />
      <SubscribeToUs />
      <Footer />
      <ManBotLine />
    </>
  );
};

export default WomanProductsPage;
