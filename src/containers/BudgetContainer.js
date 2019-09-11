import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CostCard from '../components/cards/CostCard.js'
import AddCostForm from '../components/forms/AddCostForm.js'

const BudgetContainer = props => {

  const { costs, users, budget, currentUserId, eventId, isOwner } = props

  const [ adding, setAdding ] = useState(false)
  const [ eventCosts, setEventCosts ] = useState(costs)

  const addEventCost = cost => {
    // console.log(cost)
    setEventCosts([...eventCosts, cost])
  }

  const removeEventCost = costId => {
    setEventCosts( prevEventCosts => {
      return eventCosts.filter( cost => {
        return cost.id !== costId
      })
    })
  }

  const renderCostCards = costs => {
    return eventCosts.map( cost => {
      return <CostCard key={cost.id} cost={cost} isOwner={isOwner} currentUserId={currentUserId} removeEventCost={removeEventCost}/>
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
    return Math.round(total/users.length * 100) / 100
  }

  const renderAddCostForm = () => {
    if (adding) {
      return <AddCostForm setAdding={setAdding} currentUserId={currentUserId} budgetId={budget.id} addEventCost={addEventCost}/>
    } else {
      return null
    }
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
        {renderAddCostForm()}
        {renderCostCards(costs)}
      </div>

    </div>
  </>)
}

export default BudgetContainer