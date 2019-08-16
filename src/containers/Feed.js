import React from 'react'

import { connect } from 'react-redux'

import UserMessagesContainer from './UserMessagesContainer.js'
import InvitationsContainer from './InvitationsContainer.js'
import '../css/HomePage.css';


const Feed = props => {
  return(
    <>
    <div className='feed-container'>
        <UserMessagesContainer />
        <InvitationsContainer />
    </div>
    </>
  )
}

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Feed)

