import React from 'react'

import UserMessageCard from '../components/UserMessageCard.js'

const UserMessagesContainer = props => {
  return(
    <div className='user-messages-container'>
      <div className='user-messages-top'>
        <label>Messages</label>
        <UserMessageCard message={props.message}/>
      </div>
    </div>
  )

}

export default UserMessagesContainer