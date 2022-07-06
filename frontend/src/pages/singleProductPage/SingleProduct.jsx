import Navbar from '../../components/Navbar';
import BlackLine from '../../components/BlackLine';
import SingleProductMain from '../../components/SingleProductMain';
import SubscribeToUs from '../../components/SubscribeToUs';
import ManBotListItems from '../../components/ManBotListItems';
import ManBotLine from '../../components/CopywritingLine';
import { Container } from '@mui/system';
import FixedCricles from './../../components/FixedCricles';
import LineUnderTheSliderAndCards from '../../components/LineUnderTheSliderAndCards';
import Footer from '../../components/Footer';
import CopywritingLine from '../../components/CopywritingLine';
const SingleProduct = () => {
  return (
    <>
      <Navbar />
      <FixedCricles />
      <SingleProductMain />
      <LineUnderTheSliderAndCards />
      <SubscribeToUs />
      <Footer />
      <ManBotLine />
    </>
  );
};

export default SingleProduct;
