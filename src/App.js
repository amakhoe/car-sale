
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar'
import Heros from './header'
import Cards from './components/cards';
import Food from './components/Food'
import Footer from './components/Footer'
function App() {
  return (
    <div>
<Navbar />
   <Heros />
   <Cards />
   <Food />
   <Footer />
    </div>
   
  );
}

export default App;
