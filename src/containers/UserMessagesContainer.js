import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import UserMessageCard from '../components/cards/UserMessageCard.js'
import AddMessageForm from '../components/forms/AddMessageForm.js'

const UserMessagesContainer = props => {

  const [ adding, setAdding ] = useState(false)
  
  return(
    <div className='messages container d-flex flex-column'>

      <div className='messages-top d-flex justify-content-between med-font'>

        <div className='d-flex'>
          <span className='m-auto'>Messages</span>
        </div>

        <div className='d-flex justify-content-between half-width'>
          <span className='sort-by m-auto'>Sort By</span>
          <FontAwesomeIcon className='m-auto' icon='plus' onClick={()=>setAdding(true)}/>
        </div>

      </div>
      { adding ? <AddMessageForm setAdding={setAdding}/> : null}


      <div className='user-message-cards'>
        <UserMessageCard/>
      </div>

    </div>
  )

}

export default UserMessagesContainer