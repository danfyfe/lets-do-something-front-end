import React from 'react'
import { connect } from 'react-redux'

import API_ENDPOINT from '../ApiEndpoint.js'
import { getEvent } from '../actions/eventActions.js'

import Loading from '../components/Loading.js'
import Header from '../containers/Header.js'
import Footer from '../containers/Footer.js'

import EventContainer from '../containers/EventContainer.js'

const axios = require('axios');

class EventPage extends React.Component {

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
    }).then(
      getEvent(this.props.match.params.id, this.props.setCurrentEvent, this.props.fetched)
    )
  }

  render(){
    if (!localStorage.letsDoSomethingToken || localStorage.letsDoSomethingToken === "undefined") {
      this.props.history.push("/")
    }

    return(<>
      <Header
        user={this.props.state.currentUser}     history={this.props.history}
        />
      { this.props.state.fetched && this.props.state.currentEvent.id ?
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