import React from 'react'

const NoContentMessageCard = props => {
  const { type } = props

  return(
    <div className='grey-background border-r'>
      <span className='small-font med-padding'>There are currently no {type}</span>
    </div>
  )
}

export default NoContentMessageCard