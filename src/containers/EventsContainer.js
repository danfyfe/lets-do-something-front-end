import React from 'react'

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

      <div className='events container'>
        <div className='events top'>
          <div className='events top-left'>
            <h5>Events</h5>
          </div>
          <div className='events top-right'>
            <h6 className='sort-by'>Sort By</h6>
            <h5 className='add-button' onClick={this.setAdding}>+</h5>
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