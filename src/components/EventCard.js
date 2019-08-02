import React from 'react'

const EventCard = () => {
  return(
    <div className='event-card'>
      <h3 className='event-title'>Event Title</h3>
      <div className='event-time-container'>
        <span className='event-time'>Start</span>
        <span className='event-time'>End</span>
      </div>
    </div>
  )
}

export default EventCard