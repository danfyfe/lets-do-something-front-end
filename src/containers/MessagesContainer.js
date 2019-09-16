import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MessagesContainer = props => {
  const [ adding, setAdding ] = useState(false)
  const [ searching, setSearching ] = useState(false)

  return(<div className='yellow-background m-1v d-flex flex-column med-padding'>
    <div className='d-flex flex-row justify-content-between'>
      <div>
        <span>Messages</span>
      </div>
      <div className='d-flex flex-row justify-content-between half-width'>
        <span className='m-auto'>Sort By</span>
        <FontAwesomeIcon className='m-auto' icon='plus' onClick={() => setAdding(true)}/>
        <FontAwesomeIcon className='m-auto' icon='search' onClick={() => setSearching(true)}/>
      </div>
    </div>
  </div>)
}

export default MessagesContainer