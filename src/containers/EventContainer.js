import React from 'react'

import { formatTime } from '../actions/general.js'

import AttendeeCard from '../components/cards/AttendeeCard.js'

const EventContainer = props => {
  const { title, description, start, end, users, owner_id } = props.event

  const owner = users.find( user => user.id === owner_id)

  const renderAttendeeCards = () => {
    return users.map( user => {
      return <AttendeeCard user={user}/>
    })
  }

  return(
    <div className='d-flex flex-column most-width m-auto med-padding'>
      <div className='d-flex flex-row justify-content-between small-padding'>
        <span className='large-font font-weight-bold'>{title}</span>
        <span className='link m-auto'>Edit</span>
      </div>

      <div className='d-flex flex-row justify-content-around'>
        <span className='text-muted med-font'>{formatTime(start)}</span>
        <span className='text-muted med-font'>{formatTime(end)}</span>
      </div>

      <div className='d-flex flex-column med-padding'>
        <p className='m-auto small-indent'>{description}</p>
        <div className='d-flex flex-column med-padding'>
          <span className='small-font text-muted'>Owner:</span>
          <span className='med-font small-indent small-padding'>{owner.username}</span>
        </div>
      </div>

      <div className='d-flex flex-column'>
        <span className='font-weight-bold small-font'>Attendees</span>
        <div className='d-flex flex-column'>
          {renderAttendeeCards()}
        </div>
      </div>


      

    </div>
  )
}

export default EventContainer