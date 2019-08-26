import React, { useState }from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MessageReplyCard from '../components/cards/MessageReplyCard.js'
import MessageCardReplyForm from '../components/forms/MessageCardReplyForm.js'

const MessageCardRepliesContainer = props => {

  const [ viewingReplies, setViewingReplies ] = useState(true)

  return(
    <div className='d-flex flex-row justify-content-center full-width'>

    {
      viewingReplies ?
      <>
        <div className='d-flex flex-column full-width'>

          <MessageReplyCard/>
          <MessageReplyCard/>
          <MessageReplyCard/>
          <MessageReplyCard/>
          <MessageReplyCard/>
          <MessageCardReplyForm/>
          <div className='d-flex flex-row'>
            <FontAwesomeIcon className='m-auto' icon='angle-double-up' onClick={() => setViewingReplies(false)}/>
          </div>
        </div>
      </>
       :
      <>
        <span className='text-muted tex-nowrap tiny-font m-auto' onClick={() => setViewingReplies(true)}># Replies...</span>

        <FontAwesomeIcon className='m-auto' icon='angle-double-down' onClick={() => setViewingReplies(true)}/>
      </>
    }

    </div>
  )
}

export default MessageCardRepliesContainer