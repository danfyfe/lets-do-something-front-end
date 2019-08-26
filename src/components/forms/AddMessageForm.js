import React, { useState } from 'react'



const AddMessageForm = props => {
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('')
  const [ eventId, setEventId ] = useState()

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
            <option value='Event 1'>Event 1</option>
            <option value='Event 2'>Event 2</option>
            <option value='Event 3'>Event 3</option>
            <option value='Event 4'>Event 4</option>
          </select>

      </div>

      <div className='d-flex flex-row med-padding full-width justify-content-around'>
        <button>Submit</button>
        <button onClick={()=>props.setAdding(false)}>Cancel</button>
      </div>
    </div>
  )
}

export default AddMessageForm