import Navbar from '../../components/Navbar';
import BlackLine from '../../components/BlackLine';
import SingleProductMain from '../../components/SingleProductMain';
import SubscribeToUs from '../../components/SubscribeToUs';
import ManBotListItems from '../../components/ManBotListItems';
import ManBotLine from '../../components/CopywritingLine';
import { Container } from '@mui/system';

const SingleProduct = () => {
  return (
    <>
      <Container>
        <Navbar />
        <BlackLine />
        <SingleProductMain />

        <SubscribeToUs />
        <ManBotListItems />
        <ManBotLine />
      </Container>
    </>
  );
};

export default SingleProduct;
