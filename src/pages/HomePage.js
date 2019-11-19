import React from 'react'
// import axios from 'axios'
// import { fetchUser } from '../actions/userActions.js'
import { connect } from 'react-redux'

import API_ENDPOINT from '../ApiEndpoint.js'

// import '../css/HomePage.css'

import Loading from '../components/Loading.js'
import Header from '../containers/Header.js'
import Footer from '../containers/Footer.js'
import Ad from '../components/Ad.js'
// import Calendar from '../components/Calendar.js'

// import UserMessagesContainer from '../containers/UserMessagesContainer.js'

// import FixedSideMenu from '../containers/FixedSideMenu.js'
import EventsContainer from '../containers/EventsContainer.js'
import Feed from '../containers/Feed.js'
import MessagesContainer from '../containers/MessagesContainer.js'

const axios = require('axios');

export class HomePage extends React.Component {
  componentDidMount(){
    axios({
      method: 'POST',
      url: `${API_ENDPOINT}/profile`,
      headers: {
        Authorization:  localStorage.getItem("letsDoSomethingToken")
      }
    })
    .then(resp => {
      this.props.setCurrentUser(resp.data.user)
    }).then(this.props.fetched())
  };


  render(){
    if (!localStorage.letsDoSomethingToken || localStorage.letsDoSomethingToken === "undefined") {
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
          <div className='d-flex'>
            {/* <div className='d-flex flex-column'>
              <Ad url={'https://www.danscoconuts.com/'} title={"Dan's Coconuts"}/>
            </div> */}
            <div className='main-wrapper d-flex flex-column'>
              <Feed
                history={history}/>
              <EventsContainer
                history={history}
                currentUserId={currentUser.id}
                />
              <MessagesContainer
                events={currentUser.events}
                history={history}
                currentUserId={currentUser.id}
                />
            </div>

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