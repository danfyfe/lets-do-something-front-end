import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MessageCard from '../components/cards/MessageCard.js'
import Search from '../containers/Search.js'
import NoContentMessageCard from '../components/cards/NoContentMessageCard.js'

const MessagesContainer = props => {

  const { messages } = props

  const [ adding, setAdding ] = useState(false)
  const [ searching, setSearching ] = useState(false)

  const renderMessageCards = messages => {
    return messages.map( message => {
      return <MessageCard key={message.id} message={message}/>
    })
  }

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
    <div className='overflow-auto'>
      { messages.length === 0 ?
        <NoContentMessageCard type={'messages'}/> : renderMessageCards(messages)
      }
    </div>
  </div>)
}

export default MessagesContainer