import React from 'react'

import MessageReplyContainer from '../../containers/MessageReplyContainer.js'
import { formatTime } from '../../actions/general.js'

const MessageCard = props => {

  const { message, currentUserId } = props

  const { id, content, title, event, user, created_at, replies} = props.message

  return(
    <div className='d-flex flex-column white-background med-padding border-r m-1v'>
      <div className='d-flex'>

        <div className='text-nowrap half-width med-font font-weight-bold'>
          <span className='m-auto'>{title}</span>
        </div>

        <div className='d-flex half-width justify-content-end '>
          <span className='small-font'>{user.username}</span>
        </div>
      </div>

      <div className='d-flex justify-content-around'>
        <span className='small-font text-muted m-auto'>{event.title}</span>
        <span className='text-muted small-font m-auto'>{formatTime(created_at)}</span>
      </div>

      <div className=''>
        <p className='med-font small-padding small-indent my-auto'>{content}</p>
      </div>


      <MessageReplyContainer messageId={id} replies={replies} currentUserId={currentUserId}/>


    </div>
)
}

export default MessageCard