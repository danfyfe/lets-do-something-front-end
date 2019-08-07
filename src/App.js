import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './css/App.css';

import { connect } from 'react-redux'

import HomePage from './pages/HomePage.js'
import LoginPage from './pages/LoginPage.js'
import SignupPage from './pages/SignupPage.js'
import ProfilePage from './pages/ProfilePage.js'
import EventsPage from './pages/EventsPage.js'
import CalendarPage from './pages/CalendarPage.js'

const  App = () => {
  return (
  <>
    <Switch>
      <Route exact path='/' render={({ history }) => <LoginPage history={history} /> } />
      <Route path='/signup' render={({ history }) => <SignupPage history={history} />} />
      <Route path='/home' render={({ history }) => <HomePage history={history} /> } />
      <Route path='/profile' render={({ history }) => <ProfilePage history={history} /> } />
      <Route path='/events' render={({ history }) => <EventsPage history={history} /> } />
      <Route path='/calendar' render={({ history }) => <CalendarPage history={history} /> } />
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
