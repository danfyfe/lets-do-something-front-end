import React from 'react'

import { connect } from 'react-redux'

import FollowRequestsContainer from './FollowRequestsContainer.js'
import UserInvitesContainer from './UserInvitesContainer.js'

const Feed = props => {
  const { id, follow_requests, invites } = props.currentUser
  const { history } = props

  return(
    <>
    <div className='m-1v d-flex flex-column med-padding yellow-background'>
      <div className='d-flex'>
        <span>Feed</span>
      </div>
      <div className='d-flex flex-column justify-content-between small-padding'>
        <FollowRequestsContainer
          userId={id}
          followRequests={follow_requests}/>
        <UserInvitesContainer
          history={history}
          invites={invites}/>
      </div>
    </div>
    </>
  )
}

const mapStateToProps = state => {
  return { currentUser: state.currentUser }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Feed)

