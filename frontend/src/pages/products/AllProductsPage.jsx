import React from 'react';
import Navbar from '../../components/Navbar';
import BlackLine from '../../components/BlackLine';
import AllProducts from '../../components/categories/AllProducts';
import SubscribeToUs from '../../components/SubscribeToUs';
import ManBotListItems from '../../components/ManBotListItems';
import ManBotLine from '../../components/CopywritingLine';

const AllProductsPage = () => {
  return (
    <>
      <Navbar />
      <BlackLine type="Всички Продукти" />
      <AllProducts />
      <SubscribeToUs />
      <ManBotListItems />
      <ManBotLine />
    </>
  );
};

export default AllProductsPage;
