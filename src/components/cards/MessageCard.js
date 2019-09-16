import React from 'react'

import { formatTime } from '../../actions/general.js'

const MessageCard = props => {

  const { id, content, title, event, user, created_at} = props.message

  return(
    <div className='d-flex flex-column white-background med-padding border-r m-1v'>
      <div className='d-flex'>

        <div className='text-nowrap half-width'>
          <span className='m-auto'>{title}</span>
        </div>

        <div className='d-flex half-width justify-content-end '>
          <span className='text-muted med-font m-auto'>{formatTime(created_at)}</span>
        </div>

      </div>
    </div>
)
}

export default MessageCard