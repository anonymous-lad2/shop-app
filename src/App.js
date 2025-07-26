import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Navbar } from './components/Navbar'
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';


function App() {
  return (
    <div>

      <div className='bg-slate-900'>
        <Navbar />
      </div>
    
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/cart' element = {<Cart />} />
        <Route path='/about' element = {<About />} />
        <Route path='/products' element = {<Products />} />
        <Route path='/contact' element = {<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
