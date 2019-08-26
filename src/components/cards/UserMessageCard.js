import React, { useState } from 'react'

// import MessageCardReplyForm from '../forms/MessageCardReplyForm.js'
import MessageCardRepliesContainer from '../../containers/MessageCardRepliesContainer.js'

const UserMessageCard = props => {


  return(
    <div className='message-card d-flex flex-column'>
      <div className='d-flex'>
          <div className='d-flex flex-column message-card-title-content'>
            <div className='d-flex flex-row'>
              <span className='font-weight-bold'>Title</span>
              <span className='m-auto text-muted text-nowrap tiny-font'>Event</span>
              <span className='m-auto text-muted text-nowrap tiny-font'>Time Sent</span>
            </div>
            <p>content content content content content content content content content </p>
          </div>
          <div className='d-flex flex-column message-card-user-info'>
            <img className='user-image m-auto message-card-user-image' src='https://i.imgur.com/KmHDi3Q.jpg' alt='user avatar'/>
            <span className='m-auto'>Username</span>
          </div>
        </div>
      <div className='d-flex message-card-bottom'>
        <MessageCardRepliesContainer/>
      </div>
    </div>
  )
}

export default UserMessageCard

// <div className='user-message-card-top-left'>
//   <div className='user-message-card-title'>
//     <h5>Title</h5>
//   </div>
//   <div className='user-message-card-content'>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est sit amet facilisis.</p>
//   </div>
// </div>
//
// <div className='user-message-card-top-right'>
//   <div className='user-image-container'>
//      <img src='https://i.imgur.com/KmHDi3Q.jpg' alt='user avatar'/>
//   </div>
//   <p>Username</p>
// </div>
// </div>
//
// <div className='user-message-card-bottom'>
// <div className='user-message-card-bottom-left'>
//   <p>Event Name</p><p>Message Date</p>
// </div>
// <div className='user-message-card-bottom-right'>
//   <button>Reply</button>
// </div>







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




      // <div className='user-message card'>
      //   <div className='card-header'>
      //     Title
      //   </div>
      //   <div className='user-message card-body'>
      //     <h6 className='card-subtitle mb-2 text-muted'>Username</h6>
      //     <p className='card-text'>Content</p>
      //   </div>
      // </div>