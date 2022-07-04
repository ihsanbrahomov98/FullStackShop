import React from 'react';
import Navbar from '../../components/Navbar';
import BlackLine from '../../components/BlackLine';
import AllProducts from '../../components/categories/AllProducts';
import SubscribeToUs from '../../components/SubscribeToUs';
import ManBotListItems from '../../components/ManBotListItems';
import ManBotLine from '../../components/CopywritingLine';
import LineUnderTheSliderAndCards from '../../components/LineUnderTheSliderAndCards';

import Footer from './../../components/Footer';

const AllProductsPage = () => {
  return (
    <>
      <Navbar />

      <AllProducts />
      <LineUnderTheSliderAndCards />
      <SubscribeToUs />
      <Footer />
      <ManBotLine />
    </>
  );
};

export default AllProductsPage;
