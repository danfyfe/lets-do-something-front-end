import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'

import EventCard from '../components/EventCard.js'
import AddEventForm from '../components/forms/AddEventForm.js'

import '../css/Events.css';

const EventsContainer = props => {

  const [ adding, setAdding ] = useState(false)

  const cancelAddForm = () => {
    setAdding(!adding)
  }

    return(
      <div className='events container'>
        <div className='events top'>
          <div className='events top-left'>
            <h6>Events</h6>
          </div>
          <div className='events top-right'>
            <h6 className='sort-by'>Sort By</h6>
            <h5 className='add-button' onClick={()=>setAdding(!adding)}>+</h5>
          </div>
        </div>
        {adding ? <AddEventForm cancelForm={()=>cancelAddForm()}/> : null}

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