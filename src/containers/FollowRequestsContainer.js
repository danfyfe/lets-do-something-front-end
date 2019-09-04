import React from 'react'

import FollowRequestCard from '../components/cards/FollowRequestCard.js'
import NoContentMessageCard from '../components/cards/NoContentMessageCard.js'

const FollowRequestsContainer = props => {

  const pendingRequests = props.followRequests.filter( request => request.accepted === false)

  const renderFollowRequestCards = () => {
    return pendingRequests.map( request => {
      return <FollowRequestCard userId={props.userId} key={request.id} request={request}/>
    })
  }

  return(

    <div className='d-flex flex-column white-background med-padding border-r m-1v'>

      <div className='d-flex '>
        <span>Follow Requests</span>
      </div>

      <div className=''>
        {props.followRequests.length === 0 ? <NoContentMessageCard type={'follow requests'}/> : renderFollowRequestCards()}
      </div>

    </div>
  )
}

export default FollowRequestsContainer