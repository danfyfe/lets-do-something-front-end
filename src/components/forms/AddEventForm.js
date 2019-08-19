import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const AddEventForm = props => {

  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ startDate, setStartDate ] = useState(new Date())
  const [ endDate, setEndDate ] = useState(new Date())
  const [ password, setPassword ] = useState('')

  console.log('start date', startDate)
  console.log('end date', endDate)
  console.log('title', title)
  console.log('description', description)
  console.log('password', password)

  


  return(
    <div className='add-event-form-container'>
      <form>

        <label>Title</label>
        <input
          type='text'
          placeholder='Event Title'
          onChange={e=>setTitle(e.target.value)}
        />

        <label>Description</label>
        <textarea
          type='textarea'
          rows='4'
          cols='30'
          placeholder='Event Description'
          onChange={e=>setDescription(e.target.value)}/>

        <label>Start</label>
        <DatePicker
          selected={startDate}
          onChange={setStartDate}
          showTimeSelect
          timeFormat='HH:mm'
          timeIntervals={30}
          dateFormat="MMMM d, yyyy h:mm aa"/>

        <label>End</label>
        <DatePicker
          selected={endDate}
          onChange={setEndDate}
          showTimeSelect
          timeFormat='HH:mm'
          timeIntervals={30}
          dateFormat="MMMM d, yyyy h:mm aa"/>


        <label>Password</label>
        <input
          type='password'
          placeholder='Event Password'
          onChange={e=>setPassword(e.target.value)}/>

      </form>
      <button>Submit</button>
      <button>Cancel</button>
    </div>
  )
}

export default AddEventForm