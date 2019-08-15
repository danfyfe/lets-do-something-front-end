import React from 'react'

import EventCard from '../components/EventCard.js'

import '../css/Events.css';

class EventsContainer extends React.Component {
  state = {
    creatingEvent: false
  }

  setCreatingEvent = () => {
    this.setState({
      creatingEvent: !this.state.creatingEvent
    })
  }

  render(){
    console.log(this.state)

    return(
      <div className='events-container'>
        <div className='events-container-top'>
          <h1 className='events-container-header'>Events</h1>
          <h1 className='events-container-add' onClick={this.setCreatingEvent}>+</h1>
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