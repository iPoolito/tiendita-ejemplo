
import CicloDeVida from './components/CicloDeVida';
import Fetecher from './components/Fetcher';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RickAndMorty from './components/RickAndMorty';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<CicloDeVida />} />
          <Route exact path='/pokemons' element={<Fetecher />} />
          <Route exact path='/rick-morty' element={<RickAndMorty />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
