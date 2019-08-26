import React, { useState } from 'react'
import moment from 'moment'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const EventCard = props => {

  const [ open, setOpen ] = useState(false)

  const { title, description, start, end, owner_id, users} = props.event

  const owner = users.find(user => user.id === owner_id)

  const formatTime = time => {
    return moment(time).format('MMM Do, h:mm a')
  }

  const renderOpenCloseIcon = () => {
    if (open) {
      return   <FontAwesomeIcon className='ml-auto' icon='angle-double-up' onClick={() => setOpen(false)}/>
    } else {
      return   <FontAwesomeIcon className='ml-auto' icon='angle-double-down' onClick={() => setOpen(true)}/>
    }
  }

  return(

    <div className='d-flex flex-column white-background med-padding small-marg'>
      <div className='d-flex half-width'>
        <div className='text-nowrap'>
          <span className=''>{title}</span>
        </div>
      </div>

      <div className='d-flex small-font justify-content-between half-width text-nowrap'>
        <span className='text-muted small-padding'>{formatTime(start)}</span>
        <span className='small-padding'>to</span>
        <span className='text-muted small-padding'>{formatTime(end)}</span>
      </div>

      <>{open ?
        <>
        <div className='med-font'>
          <p>{description}</p>
        </div>

        <div className=''>

          <div className='d-flex small-font'>
            <span>{users.length} Attendees</span>
          </div>

          <div className='d-flex tiny-font'>
            <span>Created By: {owner.username}</span>
          </div>

          <div className='d-flex'>
            {renderOpenCloseIcon()}
          </div>

        </div>
        </> : <div className='d-flex'>
          {renderOpenCloseIcon()}
        </div>
      }</>

    </div>
  )
}

export default EventCard