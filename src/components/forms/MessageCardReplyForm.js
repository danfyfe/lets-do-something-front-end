import React, { useState } from 'react'

const MessageCardReplyForm = prop => {
  const [ reply, setReply ] = useState('')
  console.log('reply',reply)
  return(
    <div className='d-flex flex-row justify-content-end'>
        <input type='text' placeholder='Reply...' onChange={ e => setReply(e.target.value)}/>
        <button>Reply</button>
    </div>
  )

}
export default MessageCardReplyForm