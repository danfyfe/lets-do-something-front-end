import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import API_ENDPOINT from '../../ApiEndpoint.js'

const UserCard = props => {
  // console.log(props.user)

  const { username, image, first_name, last_name } = props.user

  const createFriendRequest = username => {
    fetch(`${API_ENDPOINT}/friendrequests/${props.currentUser.id}`, {
      method:'POST',
      headers: {
        Authorization:  localStorage.getItem("token")
      },
      body: JSON.stringify({
        request_username: username
      })
    }).then(resp=>resp.json())
    .then( result => {
      console.log(result)
    })
  }
  
  return(
    <div className='user-card d-flex flex-row justify-content-between yellow-background med-padding'>

      <div className='d-flex flex-column justify-content-between med-padding'>
        {/*<img className='user-image' src='' alt='user avatar'/>*/}

        <span className='text-nowrap font-weight-bold med-font med-padding m-auto'>{username}</span>
        {/*<span className='text-muted small-font'>{first_name + ' ' + last_name}</span>*/}
      </div>

      <div className='d-flex flex-column small-padding half-width'>
        <FontAwesomeIcon className='m-auto' icon='user-plus' onClick={()=>createFriendRequest(username)}/>
      </div>

    </div>
  )
}

const mapStateToProps = state => {
  return { currentUser: state.currentUser}
}

export default connect(mapStateToProps, null)(UserCard)