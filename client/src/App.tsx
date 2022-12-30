import React from 'react';
import './App.css';
import './bootstrap.min.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyProducts from './screens/MyProducts/MyProducts';

const App = () =>
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<LandingPage />}  />
        <Route path='/products' element={<MyProducts />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>

export default App;
