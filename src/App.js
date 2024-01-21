import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import SinglePage from './components/BreadFood/SinglePage';
import { CartProvider } from 'react-use-cart'
import Card from './components/Card';
import BreadFood from './components/BreadFood/BreadFood';
import Footer from './components/Footer';
import Appetizers from './components/Appetizers/Appetizers';
import AppetizersSinglePage from './components/Appetizers/SinglePage';
import Salads from './components/Salads/Salads';
import SaladsSinglePage from './components/Salads/SinglePage';
import Soups from './components/Soups/Soups';
import SoupsSinglePage from './components/Soups/SinglePage';
import MeatDishes from './components/MeatDishes/MeatDishes';
import MeatDishesSinglePage from './components/MeatDishes/SinglePage';
import ElegantContactForm from './components/Contact/Contact';
import Registration from './components/Registration/Registration';

function App() {


  return (
    <>
      <CartProvider>
        <Navbar />

        <Routes>
          <Route path='/menu' element={<Menu />} />
          <Route path='/contact' element={<ElegantContactForm />} />
          <Route path='/menu/breadfood/:id' element={<SinglePage />} />
          <Route path='/menu/breadfood' element={<BreadFood />} />
          <Route path='/card' element={<Card />} />
          <Route path='/menu/Appetizers/:id' element={<AppetizersSinglePage />} />
          <Route path='/menu/Appetizers' element={<Appetizers />} />
          <Route path='/menu/Salads' element={<Salads />} />
          <Route path='/menu/Salads/:id' element={<SaladsSinglePage />} />
          <Route path='/menu/Soups' element={<Soups />} />
          <Route path='/menu/Soups/:id' element={<SoupsSinglePage />} />
          <Route path='/menu/MeatDishes' element={<MeatDishes />} />
          <Route path='/menu/MeatDishes/:id' element={<MeatDishesSinglePage />} />

          <Route path='/registration' element={<Registration />} />
          
        </Routes >
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
