import Navbar from '../../components/Navbar';
import BlackLine from '../../components/BlackLine';
import SingleProductMain from '../../components/SingleProductMain';
import SubscribeToUs from '../../components/SubscribeToUs';
import ManBotListItems from '../../components/ManBotListItems';
import ManBotLine from '../../components/CopywritingLine';

const SingleProduct = () => {
  return (
    <>
      <Navbar />
      <BlackLine />
      <SingleProductMain />

      <SubscribeToUs />
      <ManBotListItems />
      <ManBotLine />
    </>
  );
};

export default SingleProduct;
