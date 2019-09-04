import React from 'react'

import { formatTime } from '../actions/general.js'

const EventContainer = props => {
  const { title, description, start, end, users } = props.event



  return(
    <div className='d-flex flex-column most-width m-auto'>
      <div className='d-flex flex-row'>
        <h4>{title}</h4>
        <button>Edit</button>
      </div>

      <div className='d-flex flex-row'>
        <span className='text-muted m-auto'>{formatTime(start)}</span>
        <span className='text-muted m-auto'>{formatTime(end)}</span>
      </div>

      <div className='d-flex med-padding'>
        <p className='m-auto'>{description}</p>
      </div>

      <div className='d-flex'>
        
      </div>
    </div>
  )
}

export default EventContainer