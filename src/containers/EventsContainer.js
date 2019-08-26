import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { connect } from 'react-redux'

// import { getEvents } from '../actions/eventActions.js'

import API_ENDPOINT from '../ApiEndpoint.js'

import EventCard from '../components/cards/EventCard.js'
import AddEventForm from '../components/forms/AddEventForm.js'

// import '../css/Events.css';

class EventsContainer extends React.Component{
  state = {
    adding: false,
    events: []
  }

  componentDidMount(){
    fetch(`${API_ENDPOINT}/users/${this.props.id}/events`,{
      method: 'GET',
      headers: {
        Authorization:  localStorage.getItem("token")
      }
    }).then(resp => resp.json())
    .then( events => {
      this.setState({
        events
      })
    })
  }

  setAdding = () => {
    this.setState({
      adding: !this.state.adding
    })
  }

  renderEventCards = () => {
    return this.state.events.map( event => {
      return <EventCard key={event.id} event={event} />
    })
  }

  render(){
    return(
      <div className='d-flex flex-column yellow-background small-padding'>
        <div className='d-flex flex-row justify-content-between'>
          <div className=''>
            <span className=''>Events</span>
          </div>
          <div className='d-flex flex-row justify-content-between half-width'>
            <span className='m-auto'>Sort By</span>
            <FontAwesomeIcon className='m-auto' icon='plus' onClick={this.setAdding}/>
          </div>
      </div>

        {this.state.adding ? <AddEventForm cancelForm={this.setAdding}/> : null}

        <div className='event-cards-container'>
          {this.renderEventCards()}
        </div>

        <div className='events container-bottom'>

        </div>

      </div>

    )
  }
}

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch({type:'SET_CURRENT_USER', user}),
    fetching: () => dispatch({type:'FETCHING'}),
    fetched: () => dispatch({type:'FETCHED'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EventsContainer)