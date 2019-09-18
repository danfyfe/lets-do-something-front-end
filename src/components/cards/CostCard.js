import React, { useState } from 'react'

import DisplayCostCard from './DisplayCostCard.js'
import DeleteCostCard from './DeleteCostCard.js'

const CostCard = props => {

  const [ deletable, setDeletable ] = useState(false)

  const { id, name, user, price } = props.cost
  const { currentUserId, isOwner, removeEventCost } = props

  const isCostOwner = currentUserId => {
    if (user.id === currentUserId) {
        return true
    } else {
      return false
    }
  }

  const renderCostCard = () => {
    if (deletable & (isOwner || isCostOwner(currentUserId))) {
      return  <DeleteCostCard costId={id} setDeletable={setDeletable} removeEventCost={removeEventCost}/>
    } else {
      return <DisplayCostCard name={name} username={user.username} price={price} setDeletable={setDeletable}/>
    }
  }

  return(<>
      {renderCostCard()}
  </>)
}

export default CostCard