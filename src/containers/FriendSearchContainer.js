import React from 'react'

import Search from './Search.js'

const FriendSearchContainer = props => {
  return(
    <div>
      <Search user={props.user} searchType={'users'}/>

    </div>
  )
}

export default FriendSearchContainer