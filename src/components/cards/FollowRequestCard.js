import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { formatTime } from '../../actions/general.js'

import API_ENDPOINT from '../../ApiEndpoint.js'

const FollowRequestCard = props => {

  const { follower } = props.request
  const { removeRequest } = props

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
    .then( data => {

      removeRequest(data.id)
      // console.log(data.id)

    })
  }

  return(
    <div className='d-flex flex-row yellow-background justify-content-between small-padding m-1v'>

      <div className='d-flex flex-row justify-content-between half-width m-auto'>
        <span className='med-font font-weight-bold text-nowrap'>{follower.username}</span>
        {/*<span className='text-muted tiny-font text-nowrap m-auto'>{formatTime(created_at)}</span>*/}
      </div>

      <div className='quart-width'>
        <FontAwesomeIcon className='m-auto' icon='user-check' onClick={confirmFollowRequest}/>
      </div>

    </div>
  )
}

export default FollowRequestCard