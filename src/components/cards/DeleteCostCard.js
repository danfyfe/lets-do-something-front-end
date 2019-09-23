import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import API_ENDPOINT from '../../ApiEndpoint.js'

const DeleteCostCard = props => {

  const axios = require('axios');

  const { setDeletable, costId, removeEventCost } = props

  const deleteCost = costId => {
    axios({
      method:'DELETE',
      url: `${API_ENDPOINT}/costs`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      data: {
        cost: { id: costId}
      }
    })
    .then( resp => {
      removeEventCost(resp.data.costId)
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