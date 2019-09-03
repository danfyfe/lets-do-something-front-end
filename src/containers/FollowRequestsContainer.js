import React from 'react'

import FollowRequestCard from '../components/cards/FollowRequestCard.js'

const FollowRequestsContainer = props => {

  const pendingRequests = props.followRequests.filter( request => request.accepted === false)

  const renderFollowRequestCards = () => {
    return pendingRequests.map( request => {
      return <FollowRequestCard userId={props.userId} key={request.id} request={request}/>
    })
  }

  return(

    <div className='d-flex flex-column white-background med-padding'>

      <div className='d-flex '>
        <span>Follow Requests</span>
      </div>

      <div className=''>
        {renderFollowRequestCards()}
      </div>

    </div>
  )
}

export default FollowRequestsContainer