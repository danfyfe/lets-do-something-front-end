import React, { useState } from 'react'
import { totalPrice, pricePerPerson, isAttendee } from '../actions/costActions.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CostCard from '../components/cards/CostCard.js'
import NoContentMessageCard from '../components/cards/NoContentMessageCard.js'
import AddCostForm from '../components/forms/AddCostForm.js'


const BudgetContainer = props => {

  const { costs, users, budget, currentUserId, isOwner } = props

  const [ adding, setAdding ] = useState(false)
  const [ eventCosts, setEventCosts ] = useState(costs)

  // const [ total ] = useState(totalPrice(eventCosts), users)
  // const [ perPerson, setPerPerson ] = useState(pricePerPerson(total, users))


  const addEventCost = cost => {
    setEventCosts([...eventCosts, cost])
  }

  const removeEventCost = costId => {
    setEventCosts( prevEventCosts => {
      return eventCosts.filter( cost => {
        return cost.id !== costId
      })
    })
  }

  const renderCostCards = eventCosts => {
    if (eventCosts.length > 0) {
      return eventCosts.map( cost => {
        return <CostCard key={cost.id} cost={cost} isOwner={isOwner} currentUserId={currentUserId} removeEventCost={removeEventCost}/>
      })
    } else {
      return <NoContentMessageCard type={'costs'}/>
    }
  }




  const renderAddCostForm = () => {
    if (adding) {
      return <AddCostForm setAdding={setAdding} currentUserId={currentUserId} budgetId={budget.id} addEventCost={addEventCost}/>
    } else {
      return null
    }
  }



  const renderAddCostIcon = currentUserId => {
    if (isAttendee(currentUserId, users)) {
      return <FontAwesomeIcon className='' icon='plus' onClick={() => setAdding(true)}/>
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
        { renderAddCostIcon(currentUserId) }
      </div>

      <div className='d-flex justify-content-between med-padding'>
        <span className='med-font'>Total: ${totalPrice(eventCosts, users)}</span>
        <span className='med-font'>Each: ${pricePerPerson(totalPrice(eventCosts, users), users)}</span>
      </div>

      <div className='d-flex flex-column small-padding'>
        {renderAddCostForm()}
        {renderCostCards(eventCosts)}
      </div>

    </div>
  </>)
}

export default BudgetContainer