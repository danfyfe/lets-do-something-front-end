import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CostCard from '../components/cards/CostCard.js'
import AddCostForm from '../components/forms/AddCostForm.js'

const BudgetContainer = props => {

  const [ adding, setAdding ] = useState(true)

  const { costs, users, budget, currentUserId, eventId } = props

  const renderCostCards = costs => {
    return costs.map( cost => {
      return <CostCard key={cost.id} cost={cost} />
    })
  }

  const totalPrice = costs => {
    let total = 0

    for (var i = 0; i < costs.length; i++) {
      total += costs[i].price
    }
    return total
  }

  const pricePerPerson = total => {
    return total/users.length
  }

  return(<>
    <div>
      <div className='d-flex justify-content-between'>
        <div>
          <span className='font-weight-bold small-font'>Costs</span>
        </div>
        <FontAwesomeIcon className='' icon='plus' onClick={() => setAdding(true)}/>
      </div>

      <div className='d-flex justify-content-between med-padding'>
        <span className='med-font'>Total: ${totalPrice(costs)}</span>
        <span className='med-font'>Aprox. Each: ${pricePerPerson(totalPrice(costs))}</span>
      </div>

      <div className='d-flex flex-column small-padding'>
        { adding ? <AddCostForm setAdding={setAdding} currentUserId={currentUserId} budgetId={budget.id}/> : null}
        {renderCostCards(costs)}
      </div>

    </div>
  </>)
}

export default BudgetContainer