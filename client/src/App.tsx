import React from 'react';
import './App.css';
import './bootstrap.min.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LandingPage from './screens/LandingPage/LandingPage';

const App = () => 
<div className="App">
  <Header/>
  <main>
    <LandingPage/>
  </main>
  <Footer/>
</div>

export default App;
