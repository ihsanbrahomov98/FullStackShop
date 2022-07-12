import React from 'react';
import Navbar from '../../components/Navbar';

import SubscribeToUs from '../../components/SubscribeToUs';
import ManBotListItems from '../../components/ManBotListItems';
import ManBotLine from '../../components/CopywritingLine';

import Accessories from './../../components/categories/Accessories';
import Footer from './../../components/Footer';
import LineUnderTheSliderAndCards from '../../components/LineUnderTheSliderAndCards';

const AccessoriesPage = () => {
  return (
    <>
      <Navbar />

      <Accessories />
      <LineUnderTheSliderAndCards />
      <SubscribeToUs />
      <Footer />
      <ManBotLine />
    </>
  );
};

export default AccessoriesPage;
