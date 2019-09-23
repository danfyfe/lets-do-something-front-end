import React, { useState } from 'react'

import API_ENDPOINT from '../../ApiEndpoint.js'

const AddCostForm = props => {

  const axios = require('axios');

  const { setAdding, currentUserId, budgetId, addEventCost } = props

  const [ name, setName ] = useState('')
  const [ price, setPrice ] = useState('')

  // const [ inputs, setInputs ] = useState({})
  //
  // const handleInput = e => {
  //   setInputs({
  //     [e.target.name]: e.target.value
  //   })
  // }

  const addCost = (name, price, currentUserId, budgetId) => {
    axios({
      method: 'POST',
      url: `${API_ENDPOINT}/users/${currentUserId}/budgets/${budgetId}/costs`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      data: {
        cost: {
          name,
          price,
          budget_id: budgetId,
          user_id: currentUserId
        }
      }
    })
    .then( resp => {
      addEventCost(resp.data.cost)
      setAdding(false)
    })
  }

  return(<>
    <div className='d-flex flex-column med-padding m-1v'>
      <span className='small-font m-auto'>Add Cost</span>

      <input className='m-1v' type='text' name='name' placeholder='Name' onChange={e => setName(e.target.value)}/>
      <input className='m-1v' type='number' name='price' placeholder='Price' onChange={e => setPrice(parseInt(e.target.value))}/>

      <button className='small-font' onClick={() => addCost(name, price, currentUserId, budgetId)}>Submit</button>
      <button className='small-font' onClick={() => setAdding(false)}>Cancel</button>
    </div>
  </>)
}

export default AddCostForm