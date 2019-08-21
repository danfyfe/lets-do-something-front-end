import React, { useState } from 'react'
import moment from 'moment'
import { Icon } from 'semantic-ui-react'


// import AttendeeCard from './AttendeeCard.js'

const EventCard = props => {

  const [ open, setOpen ] = useState(false)

  const { title, description, start, end, owner_id, users} = props.event

  const owner = users.find(user => user.id === owner_id)

  const formatTime = time => {
    return moment(time).format('MMM Do YYYY, h:mm a')
  }

  const renderOpenCloseIcon = () => {
    if (open) {
      return   <Icon link onClick={()=>setOpen(false)} size='normal' name='angle double up'/>
    } else {
      return   <Icon link onClick={()=>setOpen(true)} size='normal' name='angle double down'/>
    }
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
      <>{open ?
        <>
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
        </> : null
      }</>

        <div className='collapse-button-container'>
          {renderOpenCloseIcon()}
        </div>


    </div>
  )
}

export default EventCard