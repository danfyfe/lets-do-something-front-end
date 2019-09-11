import React from 'react'
import { connect } from 'react-redux'

import API_ENDPOINT from '../ApiEndpoint.js'

import Loading from '../components/Loading.js'
import Header from '../containers/Header.js'
import Footer from '../containers/Footer.js'

import EventContainer from '../containers/EventContainer.js'


class EventPage extends React.Component {

  componentDidMount(){
    fetch(`${API_ENDPOINT}/profile`, {
      method: 'POST',
      headers: {
        Authorization:  localStorage.getItem("token")
      }
    }).then(resp => resp.json())
    .then(user => {
      this.props.setCurrentUser(user.user)
    }).then(
      fetch(`${API_ENDPOINT}/events/${this.props.match.params.id}`, {
        method: 'GET',
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }).then(resp=>resp.json())
      .then( event => {
        this.props.setCurrentEvent(event)
      }).then(this.props.fetched())
    )
  }

  render(){
    if (!localStorage.token || localStorage.token === "undefined") {
      this.props.history.push("/")
    }

    return(<>
      <Header
        user={this.props.state.currentUser}     history={this.props.history}/>
      { this.props.state.fetched && this.props.state.currentEvent.id?
        <>
          <EventContainer
            currentUser={this.props.state.currentUser}
            event={this.props.state.currentEvent}/>
        </>
        :
        <Loading/>
      }
      <Footer/>
    </>)
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
    fetched: () => dispatch({type:'FETCHED'}),
    setCurrentEvent: event => dispatch({type:'SET_CURRENT_EVENT', event})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EventPage)