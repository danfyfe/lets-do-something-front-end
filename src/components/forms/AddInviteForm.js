import React, { useState } from 'react'

import InviteSelect from './InviteSelect.js'

const AddInviteForm = props => {

  const { eventId, inputs, removeSpecificSelect, values, setValues } = props

  const addSelectValue = (value, id) => {
    // setValues([...values, value])
    setValues([...values, {id, value}])
    console.log('VALUE', value)
    console.log('ID', id)
  }

  const removeSelectValue = id => {
    let selectValue = values.find( value => value.id === id)
    // console.log('select value', selectValue)
    let index = values.indexOf(selectValue)

    values.splice(index, 1)

    console.log('VALUES',values)
  }

  const renderSelects = () => {
    return inputs.map( input => {
      return <InviteSelect
      id={input}
      key={input}
      addSelectValue={addSelectValue}
      removeSelectValue={removeSelectValue}
      removeSpecificSelect={removeSpecificSelect}/>
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