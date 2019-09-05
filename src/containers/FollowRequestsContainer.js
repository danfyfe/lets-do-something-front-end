import React, { useState, useEffect } from 'react'

import FollowRequestCard from '../components/cards/FollowRequestCard.js'
import NoContentMessageCard from '../components/cards/NoContentMessageCard.js'

const FollowRequestsContainer = props => {

  const { followRequests } = props

  const [ pendingRequests, setPendingRequests ] = useState(followRequests)

  const removeRequest = id => {
    console.log('remove request id', id)
    setPendingRequests(prevPendingRequests => pendingRequests.filter( request => {
      return request.id !== id
    }))
  }

  console.log('pending', pendingRequests)

  const renderFollowRequestCards = () => {
    return pendingRequests.map( request => {
      return <FollowRequestCard userId={props.userId} key={request.id} request={request} removeRequest={removeRequest}/>
    })
  }

  return(

    <div className='d-flex flex-column white-background med-padding border-r m-1v'>

      <div className='d-flex '>
        <span>Follow Requests</span>
      </div>

      <div className=''>
        {pendingRequests.length === 0 ? <NoContentMessageCard type={'follow requests'}/> : renderFollowRequestCards()}
      </div>

    </div>
  )
}

export default FollowRequestsContainer