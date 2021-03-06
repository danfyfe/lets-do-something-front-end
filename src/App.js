import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDoubleRight, faAngleDoubleLeft, faAngleDoubleUp, faAngleDoubleDown, faPlus, faMinus, faTimes, faSearch, faUserPlus, faUserCheck, faUserCircle, faThumbsUp, faThumbsDown, faArrowLeft, faEdit, faPaperPlane } from '@fortawesome/free-solid-svg-icons'


import './css/App.css';

import { connect } from 'react-redux'

import HomePage from './pages/HomePage.js'
import LoginPage from './pages/LoginPage.js'
import SignupPage from './pages/SignupPage.js'
import ProfilePage from './pages/ProfilePage.js'
import EventPage from './pages/EventPage.js'
import FriendSearchPage from './pages/FriendSearchPage.js'

// import EventsPage from './pages/EventsPage.js'
// import CalendarPage from './pages/CalendarPage.js'

const  App = () => {
  library.add(faAngleDoubleLeft, faAngleDoubleRight, faAngleDoubleUp, faAngleDoubleDown, faPlus, faMinus, faTimes, faSearch, faUserPlus, faUserCheck, faUserCircle, faThumbsUp, faThumbsDown, faArrowLeft, faEdit, faPaperPlane);
  return (
  <>
    <Switch>
      <Route exact path='/' render={({ history }) => <LoginPage history={history} /> } />
      <Route path='/signup' render={({ history }) => <SignupPage history={history} />} />
      <Route path='/home' render={({ history }) => <HomePage history={history} /> } />
      <Route path='/profile' render={({ history }) => <ProfilePage history={history} /> } />
      <Route path='/events/:id' render={({ history, match }) => <EventPage history={history} match={match}/> } />
      <Route path='/friendsearch' render={({ history }) => <FriendSearchPage history={history}/> } />
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

// <Route path='/events' render={({ history }) => <EventsPage history={history} /> } />
// <Route path='/calendar' render={({ history }) => <CalendarPage history={history} /> } />