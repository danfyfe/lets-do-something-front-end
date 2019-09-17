import React from 'react'

import { formatTime } from '../../actions/general.js'

const ReplyCard = props => {

  const { content, user, created_at } = props.reply

  return(
    <div className='yellow-border border-r d-flex flex-column small-padding m-1v'>
      <div className='white-background'>
        <span className='med-font med-padding'>{content}</span>
      </div>
      <div className='white-background yellow-font d-flex small-font text-muted justify-content-around '>
        <span className=''>{formatTime(created_at)}</span>
        <span className=''>{user.username}</span>
      </div>
    </div>
  )
}

export default ReplyCard