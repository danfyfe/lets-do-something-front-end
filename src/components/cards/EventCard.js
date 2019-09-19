import React, { useState } from 'react'
import { formatTime } from '../../actions/general.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const EventCard = props => {

  const [ open, setOpen ] = useState(false)

  const { id, title, description, start, end, owner_id, users} = props.event

  const owner = users.find(user => user.id === owner_id)

  const renderOpenCloseIcon = () => {
    if (open) {
      return   <FontAwesomeIcon className='ml-auto' icon='angle-double-up' onClick={() => setOpen(false)}/>
    } else {
      return   <FontAwesomeIcon className='ml-auto' icon='angle-double-down' onClick={() => setOpen(true)}/>
    }
  }

  const redirectToEventPage = eventId => {
    props.history.push(`events/${eventId}`)
  }



  return(

    <div className='d-flex flex-column white-background med-padding border-r m-1v'>
      <div className='d-flex'>

        <div className='text-nowrap half-width'>
          <span className=''>{title}</span>
        </div>

        <div className='d-flex half-width justify-content-end small-font'>
          <span className='link' onClick={() => redirectToEventPage(id)}>View Event</span>
        </div>

      </div>

      <div className='d-flex small-font justify-content-between half-width text-nowrap'>
        <span className='text-muted half-width m-auto'>{formatTime(start) + ' to ' + formatTime(end)}</span>
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