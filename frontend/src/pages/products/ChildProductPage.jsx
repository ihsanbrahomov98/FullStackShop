import React from 'react';
import Navbar from '../../components/Navbar';
import BlackLine from '../../components/BlackLine';

import SubscribeToUs from '../../components/SubscribeToUs';
import ManBotListItems from '../../components/ManBotListItems';
import ManBotLine from '../../components/CopywritingLine';

import ChildProducts from './../../components/categories/ChildProducts';
import Footer from './../../components/Footer';
import LineUnderTheSliderAndCards from '../../components/LineUnderTheSliderAndCards';
const ChildProductsPage = () => {
  return (
    <>
      <Navbar />
      <BlackLine type="Детски Обувки" />
      <ChildProducts />
      <SubscribeToUs />
      <Footer />
      <ManBotLine />
    </>
  );
};

export default ChildProductsPage;
