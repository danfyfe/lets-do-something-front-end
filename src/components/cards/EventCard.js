import React from 'react'
import moment from 'moment'

// import AttendeeCard from './AttendeeCard.js'

const EventCard = props => {

  console.log(props.event)
  const { title, description, start, end, owner_id, users} = props.event

  const owner = users.find(user => user.id === owner_id)

  const formatTime = time => {
    return moment(time).format('MMM Do YYYY, h:mm a')
  }

  return(

    <div className='event-card'>
      <div className='event-card-top'>
        <div className='event-title-container'>
          <h5 className='event-title'>{title}</h5>
        </div>

        <div className='event-time-container'>
          <span className='event-time'>{formatTime(start)}</span>
          <span className='event-time-to'>to</span>
          <span className='event-time'>{formatTime(end)}</span>
        </div>
      </div>

      <div className='event-description'>
        <p>{description}</p>
      </div>

      <div className='event-card-bottom'>

        <div className='attendees-container'>
          <span>{users.length} Attendees</span>
        </div>

        <div className='owner-container'>
          <span>Created By: {owner.username}</span>
        </div>

      </div>
    </div>
  )
}

export default EventCard