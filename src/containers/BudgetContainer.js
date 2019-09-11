import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CostCard from '../components/cards/CostCard.js'

const BudgetContainer = props => {
  const { costs, budget } = props
  console.log(props)

  const renderCostCards = costs => {
    return costs.map( cost => {
      return <CostCard key={cost.id} cost={cost}/>
    })
  }


  return(
    <div>
      <div className='d-flex justify-content-between'>
        <span className='font-weight-bold small-font'>Costs</span>
        <FontAwesomeIcon className='' icon='plus'/>
      </div>
    </div>
  )
}

export default BudgetContainer