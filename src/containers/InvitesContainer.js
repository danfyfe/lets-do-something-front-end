import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AddInviteForm from '../components/forms/AddInviteForm.js'

const AddInvitesContainer = props => {
  const { eventId } = props
  const [ inputs, setInputs ] = useState([1])


  const addSelect = () => {
    const newInput = inputs[inputs.length-1] + 1
    setInputs([...inputs, newInput])
  }

  const removeLastSelect = () => {
    inputs.splice(-1,1)
    setInputs([...inputs])
  }

  return(<>
    <div className='d-flex justify-content-between'>
      <span className='font-weight-bold small-font'>Invites</span>
      <div className='d-flex quart-width justify-content-around'>
        <FontAwesomeIcon className='' icon='plus' onClick={addSelect}/>
        <FontAwesomeIcon className='' icon='minus' onClick={removeLastSelect}/>
      </div>
    </div>

    <div>
      <AddInviteForm eventId={eventId} inputs={inputs}/>
    </div>

    <div>
      <span className='small-font text-muted'>Pending</span>

    </div>

  </>)
}

export default AddInvitesContainer