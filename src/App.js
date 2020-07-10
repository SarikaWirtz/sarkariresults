import React from 'react';
import 'materialize-css';
// import $ from 'jquery';
// import { findDOMNode } from 'react-dom';

import './App.css';
import NavBar from './components/layout/NavBar'
import SiteHeader from './components/layout/SiteHeader'
import SiteContent from './components/layout/SiteFooter'
import SiteFooter from './components/layout/SiteContent'



function App() {
  return (
    <div className="App">
      <SiteHeader></SiteHeader>
      <NavBar></NavBar>
      
      
    </div>
  );
}

export default App;
