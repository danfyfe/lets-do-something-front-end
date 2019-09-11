import React from 'react'

const CostCard = props => {

  const { name, description, user, price} = props.cost
  const { currentUserId, isOwner } = props

  const isCostOwner = currentUserId => {
    if (user.id === currentUserId) {
        return true
    } else {
      return false
    }
  }

  // console.log('owner?',isOwner)
  // console.log('cost owner?', isCostOwner(currentUserId))
  
  return(
    <div className='yellow-background small-padding m-1v border-r d-flex justify-content-between'>
      <div>
        <span className='font-weight-bold small-font small-padding text-nowrap'>{name}</span>
        <span className='tiny-font small-padding text-muted text-nowrap'>Added by: {user.username}</span>
      </div>
      <div>
        <span className='font-weight-bold small-font small-padding'>${price}</span>
      </div>
    </div>
  )
}

export default CostCard