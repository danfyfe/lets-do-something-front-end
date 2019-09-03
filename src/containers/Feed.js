import React from 'react'

import { connect } from 'react-redux'

import FollowRequestsContainer from './FollowRequestsContainer.js'

const Feed = props => {
  return(
    <>
    <div className='m-1v d-flex flex-column med-padding yellow-background'>
      <div className='d-flex'>
        <span>Feed</span>
      </div>
      <div className='d-flex flex-column justify-content-between small-padding'>
        <FollowRequestsContainer followRequests={props.currentUser.follow_requests}/>
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

