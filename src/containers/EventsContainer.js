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
    return(
      <div className='events container'>
        <div className='events top'>
          <div className='events top-left'>
            <h6>Events</h6>
          </div>
          <div className='events top-right'>
            <h6>Sort By</h6>
            <h6 className='add-button' onClick={this.setCreatingEvent}>+</h6>
          </div>
        </div>

          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>

      </div>
    )
  }
}

export default EventsContainer