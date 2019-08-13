import React from 'react'

import UserMessageCard from '../components/UserMessageCard.js'

const UserMessagesContainer = props => {
  return(
    <div className='user-messages-container'>

      <div className='user-messages-top'>

        <div className='user-messages-top-left'>
          <h4>Messages</h4>
        </div>

        <div className='user-messages-top-right'>
          <h4>Sort By</h4>
          <h4>+</h4>
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