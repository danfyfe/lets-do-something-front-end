import React from 'react'

import SearchBar from './SearchBar.js'
const FriendSearchContainer = props => {
  return(
    <div>
      <SearchBar user={props.user} searchType={'users'}/>

    </div>
  )
}

export default FriendSearchContainer