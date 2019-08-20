import React, { useState, useEffect } from 'react'
// import { Icon } from 'semantic-ui-react'

import { getEvents } from '../actions/eventActions.js'

import EventCard from '../components/EventCard.js'
import AddEventForm from '../components/forms/AddEventForm.js'

import '../css/Events.css';

const EventsContainer = props => {

  const [ adding, setAdding ] = useState(false)

  useEffect(() => {
    console.log(props)
  });

  const cancelAddForm = () => {
    setAdding(!adding)
  }

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
        {adding ? <AddEventForm cancelForm={()=>cancelAddForm()}/> : null}

        <div className='event-cards-container'>

        </div>
        <div className='events container-bottom'>

        </div>
      </div>
    )
}

export default EventsContainer