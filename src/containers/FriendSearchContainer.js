import React from 'react'

import Search from './Search.js'

const FriendSearchContainer = props => {
  return(
    <div className=''>
      <Search user={props.user} searchType={'users'}/>
    </div>
  )
}

export default FriendSearchContainer