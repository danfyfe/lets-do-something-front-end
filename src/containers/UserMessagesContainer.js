import React from 'react'

import UserMessageCard from '../components/UserMessageCard.js'

const UserMessagesContainer = props => {
  return(
    <div className='user messages-container'>

      <div className='user messages top'>

        <div className='user messages top-left'>
          <h5>Messages</h5>
        </div>

        <div className='user messages top-right'>
          <h6 className='sort-by'>Sort By</h6>
          <h5 className='add-button'>+</h5>
        </div>

      </div>
      <div className='user message-cards-container'>
      <UserMessageCard />
      <UserMessageCard />
      <UserMessageCard />
      <UserMessageCard />
      <UserMessageCard />
      <UserMessageCard />
      </div>

      <div className='user-messages container-bottom'>
      </div>
    </div>
  )

}

export default UserMessagesContainer