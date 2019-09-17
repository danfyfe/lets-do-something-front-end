import React from 'react'

import { connect } from 'react-redux'

import FollowRequestsContainer from './FollowRequestsContainer.js'
import UserInvitesContainer from './UserInvitesContainer.js'
import NoContentMessageCard from '../components/cards/NoContentMessageCard.js'

const Feed = props => {
  const { id, follow_requests, invites } = props.currentUser
  const { history } = props


  const pendingInvites = invites => {
    return invites.filter( invite => {
      return invite.rsvp === null
    })
  }

  const renderContainers = (invites, follow_requests) => {
    if (invites.length > 0 || follow_requests.length > 0) {
      return <>
        <FollowRequestsContainer
          userId={id}
          followRequests={follow_requests}/>
        <UserInvitesContainer
          history={history}
          invites={invites}/>
      </>
    } else {
      return <NoContentMessageCard type={"pending requests or invites"}/>
    }
  }

  return(
    <>
    <div className='m-1v d-flex flex-column med-padding yellow-background'>
      <div className='d-flex'>
        <span>Feed</span>
      </div>
      <div className='d-flex flex-column justify-content-between small-padding'>
      {renderContainers(pendingInvites(invites), follow_requests)}
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

