import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'materialize-css';
// import $ from 'jquery';
// import { findDOMNode } from 'react-dom';

import './App.css';
import NavBar from './components/layout/NavBar'
import SiteHeader from './components/layout/SiteHeader'
import SiteContent from './components/layout/SiteContent'
import SiteFooter from './components/layout/SiteFooter'
// import LatestResultCardDetails from './components/tables/LatestResultCardDetails'
// import LResultSummay from './components/tables/LatestResult/LResultSummary'
import LatestResultDetail from './components/tables/LatestResult/LatestResultDetail'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SiteHeader></SiteHeader>
        <NavBar></NavBar>
        
        <Switch>
          <Route exact path='/' component={SiteContent} />
        
          <Route path='/latestresult/:latest_result_id' component={LatestResultDetail} />
        
        </Switch>
        <SiteFooter></SiteFooter>
      </div>
    </BrowserRouter>
  );
}

export default App;
