import React from 'react';
import Navbar from '../../components/Navbar';
import BlackLine from '../../components/BlackLine';

import SubscribeToUs from '../../components/SubscribeToUs';
import ManBotListItems from '../../components/ManBotListItems';
import ManBotLine from '../../components/ManBotLine';
import WomanProducts from './../../components/categories/WomanProducts';

const WomanProductsPage = () => {
  return (
    <>
      <Navbar />
      <BlackLine />
      <WomanProducts />
      <SubscribeToUs />
      <ManBotListItems />
      <ManBotLine />
    </>
  );
};

export default WomanProductsPage;
