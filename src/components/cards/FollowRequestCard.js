import React from 'react'

import { formatTime } from '../../actions/general.js'

const FollowRequestCard = props => {
  console.log(props.request)

  const { follower, created_at, accepted  } = props.request

  return(
    <div className='d-flex yellow-background m-auto'>
      {follower.username}
    </div>
  )
}

export default FollowRequestCard