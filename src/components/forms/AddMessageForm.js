import React, { useState } from 'react'
import API_ENDPOINT from '../../ApiEndpoint.js'


const AddMessageForm = props => {

  const { setAdding, events, currentUserId, addNewMessage } = props

  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('')
  const [ eventId, setEventId ] = useState()

  const renderOptions = events => {
    return events.map( event => {
        return <option key={event.id} value={event.id}>{event.title}</option>
    })
  }

  const addMessage = (title, content, eventId, currenUserId) => {
    fetch(`${API_ENDPOINT}/messages`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: 'application/json',
        Authorization:  localStorage.getItem("token")
      },
      body: JSON.stringify({
        message: {
          title,
          content,
          event_id: eventId,
          user_id: currentUserId
        }
      })
    }).then(resp=>resp.json())
    .then( message => {
      addNewMessage(message)
      setAdding(false)
    })
  }

  return(
    <div className='d-flex flex-column white-background full-width med-padding med-font small-marg'>
      <div className='d-flex flex-column'>

        <label>Title</label>
        <input
          type='text'
          placeholder='Title'
          onChange={e => setTitle(e.target.value)}/>

        <label>Content</label>
        <textarea
          type='text'
          rows='4'
          cols='10'
          placeholder='Content'
          onChange={e => setContent(e.target.value)}/>

          <label>Event</label>
          <select onChange={e => setEventId(e.target.value)}>
            <option value="">Select Event</option>
            {renderOptions(events)}
          </select>

      </div>

      <div className='d-flex flex-row med-padding full-width justify-content-around'>
        <button onClick={() => addMessage(title, content, eventId, currentUserId)}>Submit</button>
        <button onClick={() => setAdding(false)}>Cancel</button>
      </div>
    </div>
  )
}

export default AddMessageForm