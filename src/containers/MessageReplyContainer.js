import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MessageReplyForm from '../components/forms/MessageReplyForm.js'
import ReplyCard from '../components/cards/ReplyCard.js'

const MessageReplyContainer = props => {

  const [ open, setOpen ] = useState(false)

  const { replies } = props

  const renderReplyOrReplies = length => {
    if (length === 1) {
      return ' Reply'
    } else {
      return ' Replies'
    }
  }

  const renderReplyCards = replies => {
    return replies.map( reply => {
      return <ReplyCard key={reply.id} reply={reply}/>
    })
  }

  const renderOpenIcon = open => {
    if (open) {
      return <FontAwesomeIcon icon='angle-double-up' onClick={() => setOpen(false)}/>
    } else {
      return <FontAwesomeIcon icon='angle-double-down' onClick={() => setOpen(true)}/>
    }
  }

  return(<>

    <div className='text-muted d-flex justify-content-around half-width ml-auto'>
      <span className='small-font'>{replies.length} {renderReplyOrReplies(replies.length)}</span>
      <div className=''>
        {renderOpenIcon(open)}
      </div>
    </div>

    { open ?
      <div>
        {renderReplyCards(replies)}
        <MessageReplyForm/>
      </div> : null
    }




  </>)
}

export default MessageReplyContainer