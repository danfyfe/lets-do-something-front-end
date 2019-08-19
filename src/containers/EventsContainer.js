import React, { useState } from 'react'

import EventCard from '../components/EventCard.js'
import AddEventForm from '../components/forms/AddEventForm.js'

import '../css/Events.css';

const EventsContainer = props => {

  const [ adding, setAdding ] = useState(false)

    return(
      <div className='events container'>
        <div className='events top'>
          <div className='events top-left'>
            <h6>Events</h6>
          </div>
          <div className='events top-right'>
            <h6 className='sort-by'>Sort By</h6>
            <h6 className='add-button' onClick={()=>setAdding(!adding)}>+</h6>
          </div>
        </div>
        {adding ? <AddEventForm/> : null}
        <AddEventForm />

        <div className='event-cards-container'>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
        </div>
        <div className='events container-bottom'>

        </div>
      </div>
    )
}

export default EventsContainer