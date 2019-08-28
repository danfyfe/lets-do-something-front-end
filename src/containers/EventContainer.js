import React from 'react'

const EventContainer = props => {
  const { title, description, start, end, users } = props.event

  return(
    <div className='d-flex flex-column most-width m-auto'>
      <h4>{title}</h4>
      
      <span>{start}</span>
      <span>{end}</span>
    </div>
  )
}

export default EventContainer