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
          <div className='events-container-top-left'>
            <h6>Events</h6>
          </div>
          <div className='events-container-top-right'>
            <h6 className='add-button' onClick={this.setCreatingEvent}>+</h6>
          </div>
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