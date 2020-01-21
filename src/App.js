import React from 'react';
// import { Route, Switch } from "react-router-dom";
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component';

import './App.css';
// import ShopPage from './pages/shop/shop.component';
function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <h2>HELOOOOOOO</h2>
    </div>
  );
}

export default App;
