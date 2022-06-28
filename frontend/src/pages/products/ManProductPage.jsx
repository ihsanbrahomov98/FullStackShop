import React from 'react';
import Navbar from '../../components/Navbar';
import BlackLine from '../../components/BlackLine';

import SubscribeToUs from '../../components/SubscribeToUs';
import ManBotListItems from '../../components/ManBotListItems';
import ManBotLine from '../../components/CopywritingLine';
import ManProducts from './../../components/categories/ManProducts';
import Footer from './../../components/Footer';

const ManProductsPage = () => {
  return (
    <>
      <Navbar />
      <BlackLine type="Мъжки Обувки" />
      <ManProducts />
      <SubscribeToUs />
      <Footer />
      <ManBotLine />
    </>
  );
};

export default ManProductsPage;
