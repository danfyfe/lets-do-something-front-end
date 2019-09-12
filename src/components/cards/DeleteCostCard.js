import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import API_ENDPOINT from '../../ApiEndpoint.js'

const DeleteCostCard = props => {
  const { setDeletable, costId, removeEventCost } = props

  const deleteCost = costId => {
    fetch(`${API_ENDPOINT}/costs`, {
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        cost: { id: costId}
      })
    }).then(resp=>resp.json())
    .then( result => {
      removeEventCost(result.costId)
      // setDeletable(false)
    })
  }

  return(<>
    <div className='yellow-background small-padding m-1v border-r d-flex justify-content-around'>
      <div className=''>
        <FontAwesomeIcon className='small-padding' icon='arrow-left' onClick={() => setDeletable(false)}/>
      </div>
      <div className=''>
        <FontAwesomeIcon className='small-padding' icon='times' onClick={() => deleteCost(costId)}/>
      </div>
    </div>
  </>)
}

export default DeleteCostCard