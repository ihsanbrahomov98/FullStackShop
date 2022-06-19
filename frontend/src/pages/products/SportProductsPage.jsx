import React from 'react';
import Navbar from '../../components/Navbar';
import BlackLine from '../../components/BlackLine';

import SubscribeToUs from '../../components/SubscribeToUs';
import ManBotListItems from '../../components/ManBotListItems';
import ManBotLine from '../../components/ManBotLine';

import SportProducts from './../../components/categories/SportProducts';

const SportProductsPage = () => {
  return (
    <>
      <Navbar />
      <BlackLine type="Спортни Обувки" />
      <SportProducts />
      <SubscribeToUs />
      <ManBotListItems />
      <ManBotLine />
    </>
  );
};

export default SportProductsPage;
