import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'

import { getEvents } from '../actions/eventActions.js'

import EventCard from '../components/EventCard.js'
import AddEventForm from '../components/forms/AddEventForm.js'

import '../css/Events.css';

const EventsContainer = props => {

  const [ adding, setAdding ] = useState(false)

  const renderEventCards = () => {
    if (props.events) {
      return props.events.map( event => {
        return <EventCard event={event}/>
      })
    }
  }
  // console.log(props.events)
    return(
      <div className='events container'>
        <div className='events top'>
          <div className='events top-left'>
            <h5>Events</h5>
          </div>
          <div className='events top-right'>
            <h6 className='sort-by'>Sort By</h6>
            <h5 className='add-button' onClick={()=>setAdding(!adding)}>+</h5>
          </div>
        </div>
        {adding ? <AddEventForm cancelForm={()=>setAdding(!adding)}/> : null}

        <div className='event-cards-container'>
        {renderEventCards()}
        </div>
        <div className='events container-bottom'>

        </div>
      </div>
    )
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