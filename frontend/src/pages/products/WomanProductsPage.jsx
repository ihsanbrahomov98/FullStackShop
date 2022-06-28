import React from 'react';
import Navbar from '../../components/Navbar';
import BlackLine from '../../components/BlackLine';

import SubscribeToUs from '../../components/SubscribeToUs';
import ManBotListItems from '../../components/ManBotListItems';
import ManBotLine from '../../components/CopywritingLine';
import WomanProducts from './../../components/categories/WomanProducts';
import Footer from './../../components/Footer';

const WomanProductsPage = () => {
  return (
    <>
      <Navbar />
      <BlackLine type="Дамски Обувки" />
      <WomanProducts />
      <SubscribeToUs />
      <Footer />
      <ManBotLine />
    </>
  );
};

export default WomanProductsPage;
