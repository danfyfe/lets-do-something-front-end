import React from 'react'
import DatePicker from "react-datepicker";


const AddEventForm = props => {
  return(
    <div className='add-event-form-container'>
      <form>
        <input type='text' placeholder='Event Title'/>
        <textarea type='textarea' rows='4' cols='30'placeholder='Event Description'/>
        <DatePicker
        showTimeSelect
        dateFormate='Pp'/>
        <input type='password' placeholder='Event Password'/>
      </form>
      <button>Submit</button>
      <button>Cancel</button>
    </div>
  )
}

export default AddEventForm