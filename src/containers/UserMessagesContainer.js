import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import UserMessageCard from '../components/cards/UserMessageCard.js'
import AddMessageForm from '../components/forms/AddMessageForm.js'

const UserMessagesContainer = props => {

  const [ adding, setAdding ] = useState(false)

  return(
    <div className='messages container d-flex flex-column'>

      <div className='messages-top d-flex justify-content-between'>

        <div className='top-left'>
          <span className='m-auto'>Messages</span>
        </div>

        <div className='d-flex justify-content-between top-right'>
          <span className='sort-by m-auto'>Sort By</span>
          <FontAwesomeIcon className='m-auto' icon='plus' onClick={()=>setAdding(true)}/>
          {/*<h5 className='add-button' onClick={()=>setAdding(true)}>+</h5>*/}
        </div>

      </div>

      {/*<AddMessageForm cancelForm={setAdding}/>*/}

      <div className='user-message-cards'>
        <UserMessageCard/>
    { /* <UserMessageCard />
      <UserMessageCard />
      <UserMessageCard />
      <UserMessageCard />
      <UserMessageCard />
      <UserMessageCard /> */}
      </div>

      <div className='user-messages container-bottom'>
      </div>
    </div>
  )

}

export default UserMessagesContainer