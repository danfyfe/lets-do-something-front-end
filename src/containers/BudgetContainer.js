import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CostCard from '../components/cards/CostCard.js'

const BudgetContainer = props => {
  const { costs, budget } = props

  const renderCostCards = costs => {
    return costs.map( cost => {
      return <CostCard key={cost.id} cost={cost}/>
    })
  }

  const totalCosts = costs => {
    let total = 0

    for (var i = 0; i < costs.length; i++) {
      total += costs[i].price
    }
    return total
  }

  return(<>
    <div>
      <div className='d-flex justify-content-between'>
        <div>
          <span className='font-weight-bold small-font'>Costs</span>
        </div>
        <FontAwesomeIcon className='' icon='plus'/>
      </div>

      <div>
        <span className='med-font med-padding'>Total: ${totalCosts(costs)}</span>
      </div>

      <div className='d-flex flex-column small-padding'>
        {renderCostCards(costs)}
      </div>

    </div>
  </>)
}

export default BudgetContainer