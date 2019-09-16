import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MessageReplyForm = props => {
  return (
    <div className='full-width m-auto med-padding d-flex justify-content-around'>
    
      <div className='eight-width'>
        <input className='m-auto' type='text' placeholder='Reply...'/>
      </div>

      <div>
        <FontAwesomeIcon className='m-auto' icon='paper-plane'/>
      </div>

    </div>
  )
}

export default MessageReplyForm