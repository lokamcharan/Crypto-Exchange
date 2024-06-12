import './App.css';
import { Routes, Route } from "react-router-dom"
import Exchanges from './components/Exchanges';
import Coins from './components/Coins';
import CoinDetails from './components/CoinDetails';
// import Banner from './components/Banner/Banner';
function App() {
  return (
  <>
  <title>Crypto Exchange</title>
    <Routes>
      <Route path='/' element={<Exchanges/>}  /> 
      <Route path='/coins' element={<Coins/>}/>
      <Route path='/coins/:id' element={<CoinDetails/>} />
    </Routes>
    </>
  );
}

export default App;
