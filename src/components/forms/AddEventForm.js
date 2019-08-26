import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import { connect } from 'react-redux'

import "react-datepicker/dist/react-datepicker.css";

import { addEvent } from '../../actions/eventActions.js'


const AddEventForm = props => {
  console.log('add event form props', props)
  const { id } = props.state.currentUser

  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ start, setStartDate ] = useState(new Date())
  const [ end, setEndDate ] = useState(new Date())
  const [ password, setPassword ] = useState('')
  const [ owner_id ] = useState(id)

  return(
    <div className='add-event-form-container'>
    <h5>Add and Event!</h5>
      <div className='add-event-form-body'>
        <div className='add-event-form-left'>

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

            <label>Password</label>
            <input
              type='password'
              placeholder='Event Password'
              onChange={e=>setPassword(e.target.value)}/>

        </div>

        <div className='add-event-form-right'>

          <label>Start</label>
          <DatePicker
            selected={start}
            onChange={setStartDate}
            showTimeSelect
            timeFormat='HH:mm'
            timeIntervals={30}
            dateFormat="MMMM d, yyyy h:mm aa"/>

          <label>End</label>
          <DatePicker
            selected={end}
            onChange={setEndDate}
            showTimeSelect
            timeFormat='HH:mm'
            timeIntervals={30}
            dateFormat="MMMM d, yyyy h:mm aa"/>

          </div>
        </div>



      <div className='add-event-form-buttons'>
        <button onClick={()=>addEvent({ title, description, start, end, password, owner_id}, props.cancelForm)}>Submit</button>
        <button onClick={props.cancelForm}>Cancel</button>
      </div>
    </div>
  )
}


const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {
    setErrorMessage: errorMessage => dispatch({type:'SET_ERROR_MESSAGE', errorMessage})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddEventForm)