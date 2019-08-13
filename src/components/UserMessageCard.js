import React from 'react'

const UserMessageCard = props => {
  return(
    <div className='user-message-card'>

      <div className='user-message-card-top'>

        <div className='user-message-card-top-left'>
          <div className='user-message-card-title'>
            <h5>Title</h5>
          </div>
          <div className='user-message-card-content'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est sit amet facilisis.</p>
          </div>
        </div>

        <div className='user-message-card-top-right'>
          <div className='user-image-container'>
             <img src='https://i.imgur.com/KmHDi3Q.jpg' alt='user avatar'/>
          </div>
          <p>Username</p>
        </div>
      </div>

      <div className='user-message-card-bottom'>
        <div className='user-message-card-bottom-left'>
          <p>Event Name</p><p>Message Date</p>
        </div>
        <div className='user-message-card-bottom-right'>
          <button>Reply</button>
        </div>
      </div>
    </div>
  )
}

export default UserMessageCard

// <img src='https://i.imgur.com/KmHDi3Q.jpg' alt='user'/>


      // <div className='user-message-card-top'>
      //   <h5>Title</h5>
      //   <div className='user-image-container'>
      //     <img src='https://i.imgur.com/KmHDi3Q.jpg' alt='user'/>
      //   </div>
      // </div>
      //
      // <div className='user-message-card-middle'>
      //
      //     <p>Content</p>
      //
      // </div>
      //
      // <div className='user-message-card-bottom'>
      //
      // </div>