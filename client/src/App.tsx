import React from 'react';
import './App.css';
import './bootstrap.min.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import { useSelector } from 'react-redux';
import AuthLandingPage from './screens/LandingPage/AuthLandingPage';
import Products from './screens/MyProducts/Products';
import CreateProduct from './screens/ProductPage/CreateProduct';
import UpdateProduct from './screens/ProductPage/UpdateProduct';

const App = () => {
  const { userInfo } = useSelector((state: { userLogin: { userInfo: { _id: string, email: string, createdAt: string}}})=> state.userLogin)
 
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={userInfo ? <AuthLandingPage/>: <LandingPage />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/createproduct' element={<CreateProduct />} />
          <Route path='/updateproduct' element={<UpdateProduct />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}


export default App;
