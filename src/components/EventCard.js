import React from 'react'

// import AttendeeCard from './AttendeeCard.js'

const EventCard = () => {
  return(
    <div className='event-card'>
      <div className='event-card top'>
        <div className='event-title-container'>
          <h5 className='event-title'>Event Title</h5>
        </div>

        <div className='event-time-container'>
          <p className='event-time'>08/07/19 at 7pm</p>
          <p className='event-time'>to</p>
          <p className='event-time'>08/11/19 at 5pm</p>
        </div>
      </div>
      
      <div className='event-description'>
        <p>Event description! This is where you put the breif description of all the fun you will be having!</p>
      </div>
      <div className='attendees-container'>
        <p># Attendees</p>
      </div>
    </div>
  )
}

export default EventCard