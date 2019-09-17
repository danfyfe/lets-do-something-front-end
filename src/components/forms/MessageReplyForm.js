import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import API_ENDPOINT from '../../ApiEndpoint.js'

const MessageReplyForm = props => {

  const { messageId, currentUserId, addNewReply } = props
  const [ content, setContent ] = useState('')

  const handleChange = value => {
    setContent(value)
  }

  const addReply = content => {
    fetch(`${API_ENDPOINT}/replies`,{
      method:'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: 'application/json',
        Authorization:  localStorage.getItem("token")
      },
      body: JSON.stringify({
        content,
        message_id: messageId,
        user_id: currentUserId
      })
    }).then(resp=>resp.json())
    .then( reply => {
      addNewReply(reply)
      setContent('')
    })
  }

  return (
    <div className='full-width m-auto med-padding d-flex justify-content-around'>

      <div className='eight-width'>
        <input id='reply-form' className='m-auto' type='text' placeholder='Reply...' value={content} onChange={e => handleChange(e.target.value)}/>
      </div>

      <div>
        <FontAwesomeIcon className='m-auto' icon='paper-plane' onClick={() => addReply(content)}/>
      </div>

    </div>
  )
}

export default MessageReplyForm