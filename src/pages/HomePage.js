import React from 'react'
// import axios from 'axios'
// import { fetchUser } from '../actions/userActions.js'
import { connect } from 'react-redux'

import API_ENDPOINT from '../ApiEndpoint.js'

// import '../css/HomePage.css'

import Loading from '../components/Loading.js'
import Header from '../containers/Header.js'
import Footer from '../containers/Footer.js'
// import Calendar from '../components/Calendar.js'

// import UserMessagesContainer from '../containers/UserMessagesContainer.js'

import FixedSideMenu from '../containers/FixedSideMenu.js'
import EventsContainer from '../containers/EventsContainer.js'
import Feed from '../containers/Feed.js'

class HomePage extends React.Component {
  componentDidMount(){
    fetch(`${API_ENDPOINT}/profile`, {
      method: 'POST',
      headers: {
        Authorization:  localStorage.getItem("token")
      }
    }).then(resp => resp.json())
    .then(user => {
      this.props.setCurrentUser(user.user)
    }).then(this.props.fetched())
  };


  render(){
    if (!localStorage.token || localStorage.token === "undefined") {
      this.props.history.push("/")
    }

    const { history } = this.props
    const { currentUser } = this.props.state
    const { fetched } = this.props.state

    return(
      <>
        <Header
          user={currentUser}
          history={history}/>
        { fetched && currentUser.id ?
          <div className='main-wrapper'>
          <FixedSideMenu/>
          <Feed
            history={history}/>
          <EventsContainer
            history={history}
            currentUserId={currentUser.id}
            />
          </div> : <Loading/>
          }

        <Footer/>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    state
   }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch({type:'SET_CURRENT_USER', user}),
    fetching: () => dispatch({type:'FETCHING'}),
    fetched: () => dispatch({type:'FETCHED'})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(HomePage)