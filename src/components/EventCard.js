import React from 'react'

import AttendeeCard from './AttendeeCard.js'

const EventCard = () => {
  return(
    <div className='event-card'>
      <h3 className='event-title'>Event Title</h3>
      <div className='event-time-container'>
        <div className='event-time'>08/07/19 at 7pm</div>
        <div className='event-time'>to</div>
        <div className='event-time'>08/11/19 at 5pm</div>
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