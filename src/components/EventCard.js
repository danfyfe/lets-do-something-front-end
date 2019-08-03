import React from 'react'

import AttendeeCard from './AttendeeCard.js'

const EventCard = () => {
  return(
    <div className='event-card'>
      <h3 className='event-title'>Event Title</h3>
      <div className='event-time-container'>
        <span className='event-time'>Start</span>
        <span className='event-time'>End</span>
      </div>
      <div className='event-description'>
        Event description! This is where you put the breif description of all the fun you will be having!
      </div>
      <div className='attendees-container'>
        <AttendeeCard/>
        <AttendeeCard/>
        <AttendeeCard/>
        <AttendeeCard/>
        <AttendeeCard/>
        <AttendeeCard/>
      </div>
    </div>
  )
}

export default EventCard