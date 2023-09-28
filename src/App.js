import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';
import ShopContextProvider from './context/Shop-context'
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <ShopContextProvider>
      <BrowserRouter>

        <Navbar />
      
        <Routes>

          <Route path='/cart' element={<Cart/>} />
          <Route path='/shop' element={<Shop/>} />

        </Routes>
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  )
}

export default App


