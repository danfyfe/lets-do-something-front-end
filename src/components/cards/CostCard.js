import React from 'react'

const CostCard = props => {

  const { name, description, user, price} = props.cost

  return(
    <div className='yellow-background small-padding m-1v border-r d-flex justify-content-between'>
      <div>
        <span className='font-weight-bold small-font small-padding'>{name}</span>
        <span className='tiny-font small-padding text-muted text-nowrap'>Added by: {user.username}</span>
      </div>
      <div>
        <span className='font-weight-bold small-font small-padding'>${price}</span>
      </div>
    </div>
  )
}

export default CostCard