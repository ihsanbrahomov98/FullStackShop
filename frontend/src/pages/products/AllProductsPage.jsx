import React from 'react';
import Navbar from '../../components/Navbar';
import BlackLine from '../../components/BlackLine';
import AllProducts from '../../components/categories/AllProducts';
import SubscribeToUs from '../../components/SubscribeToUs';
import ManBotListItems from '../../components/ManBotListItems';
import ManBotLine from '../../components/CopywritingLine';

import Footer from './../../components/Footer';

const AllProductsPage = () => {
  return (
    <>
      <Navbar />
      <BlackLine type="Всички Продукти" />
      <AllProducts />
      <SubscribeToUs />
      <Footer />
      <ManBotLine />
    </>
  );
};

export default AllProductsPage;
