import React from 'react'

const UserCard = props => {
  console.log(props.user)

  const { username , image, first_name, last_name } = props.user

  return(
    <div className='d-flex flex-column yellow-background med-padding'>
      <div className='d-flex justify-content-between med-padding'>
        <img src={image} alt='user avatar'/>
        <span className='text-nowrap '>{username}</span>
      </div>
      <div className='dflex'>
        <span className='text-muted small-font'>{first_name + ' ' + last_name}</span>
      </div>
    </div>
  )
}

export default UserCard