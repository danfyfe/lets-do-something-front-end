import React from 'react'

import EventCard from '../components/EventCard.js'

import '../css/Events.css';

class EventsContainer extends React.Component {
  render(){
    return(
      <div className='events-container'>
        <div className='events-container-top'>
          <h1 className='events-header'>Events</h1>
          <h1 className='events-header'>+</h1>
        </div>
        <div className='event-cards-container'>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>

        </div>
      </div>
    )
  }
}

export default EventsContainer