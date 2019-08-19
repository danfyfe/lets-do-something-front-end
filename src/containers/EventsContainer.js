import React, { useState } from 'react'

import EventCard from '../components/EventCard.js'

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

          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
        <div className='events container-bottom'>

        </div>
      </div>
    )
}

export default EventsContainer