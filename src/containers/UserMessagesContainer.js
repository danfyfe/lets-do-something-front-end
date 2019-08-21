import React, { useState } from 'react'

import UserMessageCard from '../components/cards/UserMessageCard.js'
import AddMessageForm from '../components/forms/AddMessageForm.js'

const UserMessagesContainer = props => {

  const [ adding, setAdding ] = useState(false)

  return(
    <div className='user messages-container'>

      <div className='user messages top'>

        <div className='user messages top-left'>
          <h5>Messages</h5>
        </div>

        <div className='user messages top-right'>
          <h6 className='sort-by'>Sort By</h6>
          <h5 className='add-button' onClick={()=>setAdding(!adding)}>+</h5>
        </div>

      </div>
      
      <AddMessageForm/>

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