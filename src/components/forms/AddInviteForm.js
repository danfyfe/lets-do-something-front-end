import React, { useState } from 'react'

import InviteSelect from './InviteSelect.js'

const AddInviteForm = props => {
  const { eventId, inputs } = props

  const [ values, setValues ] = useState([])

  const addSelectValue = value => {
    setValues([...values, value])
  }

  const renderSelects = () => {
    return inputs.map( input => {
      return <InviteSelect key={input} addSelectValue={addSelectValue}/>
    })
  }


  return(
    <div className='d-flex flex-column m-1v'>
        {renderSelects()}
        <button className='small-font'>Send Invites!</button>
    </div>
  )
}

export default AddInviteForm