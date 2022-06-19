import React from 'react';
import Navbar from '../../components/Navbar';
import BlackLine from '../../components/BlackLine';

import SubscribeToUs from '../../components/SubscribeToUs';
import ManBotListItems from '../../components/ManBotListItems';
import ManBotLine from '../../components/ManBotLine';

import AccessoriesProducts from './../../components/categories/ChildProducts';

const AccessoriesPage = () => {
  return (
    <>
      <Navbar />
      <BlackLine type="Аксесоари" />
      <AccessoriesProducts />
      <SubscribeToUs />
      <ManBotListItems />
      <ManBotLine />
    </>
  );
};

export default AccessoriesPage;
