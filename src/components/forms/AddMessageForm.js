import React, { useState } from 'react'



const AddMessageForm = props => {
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('')

  return(
    <div className='add-message-form-container'>
      <div className='add-message-form'>

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


      </div>

      <div className='add-message-button-container'>
        <button>Submit</button>
        <button onClick={()=>props.cancelForm(false)}>Cancel</button>
      </div>
    </div>
  )
}

export default AddMessageForm