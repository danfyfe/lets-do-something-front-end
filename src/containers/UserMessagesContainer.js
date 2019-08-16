import React from 'react'

import UserMessageCard from '../components/UserMessageCard.js'

const UserMessagesContainer = props => {
  return(
    <div className='user messages-container'>

      <div className='user messages top'>

        <div className='user messages top-left'>
          <h6>Messages</h6>
        </div>

        <div className='user messages top-right'>
          <h6 className='sort-by'>Sort By</h6>
          <h6 className='add-button'>+</h6>
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