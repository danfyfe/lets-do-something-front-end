import React from 'react'

const UserMessageCard = props => {
  return(
    <div className='user-message-card'>

      <div className='user-message-card-top'>
        <h5>Title</h5>
        <div className='user-image-container'>
          <img src='https://i.imgur.com/KmHDi3Q.jpg' alt='user'/>
        </div>
      </div>

      <div className='user-message-card-middle'>
        <p>Content</p>
      </div>

      <div className='user-message-card-bottom'>
      </div>

    </div>
  )
}

export default UserMessageCard

// <img src='https://i.imgur.com/KmHDi3Q.jpg' alt='user'/>