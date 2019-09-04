import React from 'react'

const AttendeeCard = props => {

  const { username } = props.user

  return(
    <div className='d-flex yellow-background small-padding border-r'>
      <span className='font-weight-bold small-font small-padding'>{username}</span>
    </div>
  )
}

export default AttendeeCard