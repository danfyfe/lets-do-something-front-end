import React, { useState } from 'react'



const AddMessageForm = props => {
  return(
    <div className='add-message-form-container'>
      <div className='add-message-form'>

        <label>Title</label>
        <input type='text' placeholder='Title'/>

        <label>Content</label>
        <textarea type='text' rows='4' cols='10'placeholder='Content'/>


      </div>

      <div className='add-message-button-container'>
        <button>Submit</button>
        <button onClick={()=>props.cancelForm(false)}>Cancel</button>
      </div>
    </div>
  )
}

export default AddMessageForm