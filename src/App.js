import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './css/App.css';

import { connect } from 'react-redux'

import ProfilePage from './pages/ProfilePage.js'
import LoginPage from './pages/LoginPage.js'

const  App = () => {
  return (
  <>
    <Switch>
      <Route path='/' render={({ history }) => <LoginPage history={history} /> } />
      <Route path='/profile' render={({ history }) => <ProfilePage history={history} /> } />
    </Switch>
  </>
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
