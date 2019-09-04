import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AddInviteForm from '../components/forms/AddInviteForm.js'

const AddInvitesContainer = props => {
  const { eventId } = props
  const [ inputs, setInputs ] = useState([1])
  const [ values, setValues ] = useState([])

  const addSelect = () => {
    let newInput
    if (inputs.length === 0) {
      newInput = 1
    } else {
      newInput = inputs[inputs.length-1] + 1
    }
    setInputs([...inputs, newInput])
  }

  const removeLastSelect = () => {
    inputs.splice(-1,1)
    setInputs([...inputs])
    values.splice(-1,1)
    setValues([...values])
  }

  const removeSpecificSelect = id => {
    let index = inputs.indexOf(id)
    console.log('removeSpecificSelect', index)
  }

  console.log('values', values)

  return(<>
    <div className='d-flex justify-content-between'>
      <span className='font-weight-bold small-font'>Invites</span>
      <div className='d-flex quart-width justify-content-around'>
        <FontAwesomeIcon className='' icon='plus' onClick={addSelect}/>
        <FontAwesomeIcon className='' icon='minus' onClick={removeLastSelect}/>
      </div>
    </div>

    <div>
      <AddInviteForm
        eventId={eventId}
        inputs={inputs}
        values={values}
        setValues={setValues}
        removeSpecificSelect={removeSpecificSelect}/>
    </div>

    <div>
      <span className='small-font text-muted'>Pending</span>

    </div>

  </>)
}

export default AddInvitesContainer