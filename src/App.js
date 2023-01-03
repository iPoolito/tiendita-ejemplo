
import CicloDeVida from './components/CicloDeVida';
import Fetecher from './components/Fetcher';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RickAndMorty from './components/RickAndMorty';
import CategoryContainer from './components/CategoryContainer';
import ItemContainer from './components/ItemContainer';
import CartProvider from './context/cartContext';
import Provider from './context/AuthContext/authProvider';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <Provider>
        <BrowserRouter>
          <div>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<CicloDeVida />} />
              {/* <Route exact path='/pokemons' element={<Fetecher />} />
          <Route exact path='/rick-morty' element={<RickAndMorty />} /> */}
              <Route path='/category/:categoryName' element={<CategoryContainer />} />
              <Route path='/item/:itemID' element={<ItemContainer />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </CartProvider>
  );
}

export default App;
