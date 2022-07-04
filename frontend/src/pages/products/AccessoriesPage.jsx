import React from 'react';
import Navbar from '../../components/Navbar';
import BlackLine from '../../components/BlackLine';

import SubscribeToUs from '../../components/SubscribeToUs';
import ManBotListItems from '../../components/ManBotListItems';
import ManBotLine from '../../components/CopywritingLine';

import AccessoriesProducts from './../../components/categories/ChildProducts';
import Footer from './../../components/Footer';
import LineUnderTheSliderAndCards from '../../components/LineUnderTheSliderAndCards';

const AccessoriesPage = () => {
  return (
    <>
      <Navbar />

      <AccessoriesProducts />
      <LineUnderTheSliderAndCards />
      <SubscribeToUs />
      <Footer />
      <ManBotLine />
    </>
  );
};

export default AccessoriesPage;
