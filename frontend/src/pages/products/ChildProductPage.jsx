import React from 'react';
import Navbar from '../../components/Navbar';
import BlackLine from '../../components/BlackLine';

import SubscribeToUs from '../../components/SubscribeToUs';
import ManBotListItems from '../../components/ManBotListItems';
import ManBotLine from '../../components/ManBotLine';

import ChildProducts from './../../components/categories/ChildProducts';

const ChildProductsPage = () => {
  return (
    <>
      <Navbar />
      <BlackLine />
      <ChildProducts />
      <SubscribeToUs />
      <ManBotListItems />
      <ManBotLine />
    </>
  );
};

export default ChildProductsPage;
