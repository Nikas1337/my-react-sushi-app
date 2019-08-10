import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './containers/AppHeader'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './views/Home'
import Footer from './components/Footer'
function App() {
  return (
      <Router>
          <AppHeader/>
          <Route exact path='/' component={Home}/>
          <Footer/>
      </Router>

  );
}

export default App;
