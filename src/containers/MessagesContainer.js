import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MessageCard from '../components/cards/MessageCard.js'
import AddMessageForm from '../components/forms/AddMessageForm.js'
import Search from '../containers/Search.js'
import NoContentMessageCard from '../components/cards/NoContentMessageCard.js'

import API_ENDPOINT from '../ApiEndpoint.js'

const MessagesContainer = props => {

  const { messages, setMessages, currentUserId, events } = props

  useEffect(() => {
    fetch(`${API_ENDPOINT}/users/${currentUserId}/messages`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Accept: 'application/json',
        Authorization:  localStorage.getItem("token")
      }
    }).then(resp=>resp.json())
    .then( messages => {
      setMessages(messages)
    })
  }, [ setMessages, currentUserId ])


  const [ adding, setAdding ] = useState(false)
  const [ searching, setSearching ] = useState(false)

  const renderMessageCards = messages => {
    return messages.map( message => {
      return <MessageCard key={message.id} message={message} currentUserId={currentUserId}/>
    })
  }

  const addNewMessage = message => {
    setMessages([...messages, message])
  }

  return(<div className='yellow-background m-1v d-flex flex-column med-padding'>
    <div className='d-flex flex-row justify-content-between'>
      <div>
        <span>Messages</span>
      </div>
      <div className='d-flex flex-row justify-content-between half-width'>
        <span className='m-auto'>Sort By</span>
        <FontAwesomeIcon className='m-auto' icon='plus' onClick={() => setAdding(!adding)}/>
        <FontAwesomeIcon className='m-auto' icon='search' onClick={() => setSearching(true)}/>
      </div>
    </div>
    <div className=''>
      { adding ? <AddMessageForm setAdding={setAdding} events={events} currentUserId={currentUserId} addNewMessage={addNewMessage}/> : null }
      { messages.length === 0 ?
        <NoContentMessageCard type={'messages'}/> : renderMessageCards(messages)
      }
      {searching ? <Search/> : null}
    </div>
  </div>)
}

const mapStateToProps = state => {
  return {
    messages: state.messages
   }
}

const mapDispatchToProps = dispatch => {
  return {
    setMessages: messages => dispatch({type:'SET_MESSAGES', messages}),
    fetching: () => dispatch({type:'FETCHING'}),
    fetched: () => dispatch({type:'FETCHED'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer)