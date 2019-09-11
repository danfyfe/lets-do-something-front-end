import React from 'react'

const DisplayCostCard = props => {
  const { name, username, price, setDeletable } = props
  return(<>
    <div className='yellow-background small-padding m-1v border-r d-flex justify-content-between '>
      <div onClick={() => setDeletable(true)}>
        <span className='font-weight-bold small-font small-padding text-nowrap'>{name}</span>
        <span className='tiny-font text-muted small-padding text-nowrap'>Added by: {username}</span>
      </div>
      <div>
        <span className='font-weight-bold small-font'>${price}</span>
      </div>
    </div>
  </>)
}

export default DisplayCostCard