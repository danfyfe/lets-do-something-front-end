import React, { useState } from 'react'

const AddCostForm = props => {
  const { setAdding, currentUserId } = props

  const [ inputs, setInputs ] = useState({ name:'', price:''})

  const handleInput = e => {
    setInputs({
      [e.target.name]: e.target.value
    })
  }

  const addCost = (name, price, userId, budgetId) => {
    
  }



  return(<>
    <div className='d-flex flex-column med-padding m-1v'>
      <span className='small-font m-auto'>Add Cost</span>

      <input className='m-1v' type='text' name='name' placeholder='Name' onChange={handleInput}/>
      <input className='m-1v' type='number' name='price' placeholder='Price' onChange={handleInput}/>

      <button className='small-font'>Submit</button>
      <button className='small-font' onClick={() => setAdding(false)}>Cancel</button>
    </div>
  </>)
}

export default AddCostForm