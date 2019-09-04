import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import API_ENDPOINT from '../../ApiEndpoint.js'

const UserCard = props => {
  const [ requested, setRequested ] = useState(false)
  const [ following, setFollowing ] = useState(false)

  const { id, username, followees, follow_requests } = props.user

  useEffect(()=>{
    follow_requests.forEach( request => {
      if (request.user_id === id || request.follower_id === id) {
        setRequested(true)
      }
    })

    followees.forEach( follow => {
      if (follow.id === props.currentUser.id) {
        setFollowing(true)
      }
    })
  },[id, follow_requests, followees, props.currentUser.id])

  const createFriendRequest = username => {
    fetch(`${API_ENDPOINT}/followrequest/${props.currentUser.id}`, {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: 'application/json',
        Authorization:  localStorage.getItem("token")
      },
      body: JSON.stringify({
        request_username: username
      })
    }).then(resp=>resp.json())
    .then( result => {
      if (result.status === 'accepted') {
        setRequested(true)
      }
    })
  }

  const renderIcon = () => {
    if (id === props.currentUser.id) {
      return <FontAwesomeIcon className='m-auto link' icon='user-circle'/>
    } else if (requested || following) {
      return <FontAwesomeIcon className='m-auto link' icon='user-check'/>
    } else {
      return <FontAwesomeIcon className='m-auto link' icon='user-plus' onClick={()=>createFriendRequest(username)}/>
    }
  }

  return(
    <div className='user-card d-flex flex-row justify-content-between yellow-background med-padding border-r'>

      <div className='d-flex flex-column justify-content-between med-padding'>
        {/*<img className='user-image' src='' alt='user avatar'/>*/}

        <span className='text-nowrap font-weight-bold med-font med-padding m-auto'>{username}</span>
        {/*<span className='text-muted small-font'>{first_name + ' ' + last_name}</span>*/}
      </div>

      <div className='d-flex flex-column small-padding half-width'>

        {renderIcon()}
      </div>

    </div>
  )
}

const mapStateToProps = state => {
  return { currentUser: state.currentUser}
}

export default connect(mapStateToProps, null)(UserCard)