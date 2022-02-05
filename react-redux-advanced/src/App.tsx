import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { RootState } from './components/store/index';

function App() {
  const showCart: boolean = useSelector((state: RootState) => state.uiSlice.cartIsVisible);
  return (
    <Layout>
     {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

