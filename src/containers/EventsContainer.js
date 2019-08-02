import React from 'react'

import EventCard from '../components/EventCard.js'

class EventsContainer extends React.Component {
  render(){
    return(
      <div className='events-container'>
        <h1 className='events-header'>Events</h1>
        <div className='event-cards-container'>
          <EventCard/>
        </div>
      </div>
    )
  }
}

export default EventsContainer