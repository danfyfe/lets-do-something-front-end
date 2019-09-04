import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatTime } from '../../actions/general.js'

import API_ENDPOINT from '../../ApiEndpoint.js'

const FollowRequestCard = props => {

  const { follower, created_at  } = props.request

  const confirmFollowRequest = () => {
    fetch(`${API_ENDPOINT}/confirmfollowrequest/${props.request.id}`,{
      method:'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization:  localStorage.getItem("token")
      },
      body: JSON.stringify({
        currentUserId: props.userid
      })
    }).then(resp=>resp.json())
    .then( result => {
      console.log(result)
    })
  }

  return(
    <div className='d-flex flex-row yellow-background m-auto justify-content-between med-padding'>

      <div className='d-flex flex-column justify-content-between half-width m-auto'>
        <span className='med-norm-font'>{follower.username}</span>
        <span className='text-muted tiny-font med-indent text-nowrap'>{formatTime(created_at)}</span>
      </div>

      <div className='m-auto'>
        <FontAwesomeIcon className='padding' icon='user-check' onClick={confirmFollowRequest}/>
      </div>

    </div>
  )
}

export default FollowRequestCard