import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import { connect } from 'react-redux'

import ProfilePage from './pages/ProfilePage.js'
import HomePage from './pages/HomePage.js'

const  App = () => {
  return (
    <div className="main">

      <div className='main-content'>
        <HomePage/>
      </div>

  
    </div>
  );
}

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
