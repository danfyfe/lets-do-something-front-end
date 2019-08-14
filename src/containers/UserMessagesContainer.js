import React from 'react'

import UserMessageCard from '../components/UserMessageCard.js'

const UserMessagesContainer = props => {
  return(
    <div className='user-messages-container'>

      <div className='user-messages-top'>

        <div className='user-messages-top-left'>
          <span>Messages</span>
        </div>

        <div className='user-messages-top-right'>
          <span>Sort By</span>
          <span>+</span>
        </div>

      </div>

      <UserMessageCard />
      <UserMessageCard />
      <UserMessageCard />
      <UserMessageCard />
    </div>
  )

}

export default UserMessagesContainer