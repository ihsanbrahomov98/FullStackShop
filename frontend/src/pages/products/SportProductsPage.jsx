import React from 'react';
import Navbar from '../../components/Navbar';
import BlackLine from '../../components/BlackLine';

import SubscribeToUs from '../../components/SubscribeToUs';
import ManBotListItems from '../../components/ManBotListItems';
import ManBotLine from '../../components/CopywritingLine';

import SportProducts from './../../components/categories/SportProducts';
import Footer from './../../components/Footer';

const SportProductsPage = () => {
  return (
    <>
      <Navbar />
      <BlackLine type="Спортни Обувки" />
      <SportProducts />
      <SubscribeToUs />
      <Footer />
      <ManBotLine />
    </>
  );
};

export default SportProductsPage;
