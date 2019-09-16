import React, { useState } from 'react'

import MessageReplyForm from '../components/forms/MessageReplyForm.js'
const MessageReplyContainer = props => {

  const [ replying, setReplying ] = useState(false)



  return(<>
    { replying ? <MessageReplyForm/> :
      <div className='ml-auto'>
        <span className='link small-font' onClick={() => setReplying(true)}>Reply</span>
    </div>
    }




  </>)
}

export default MessageReplyContainer