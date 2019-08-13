import React from 'react'

import { connect } from 'react-redux'

import UserMessagesContainer from './UserMessagesContainer.js'
import '../css/Feed.css';


const Feed = props => {
  console.log(props)
  return(
    <>
      <h3>Your Feed</h3>
      <UserMessagesContainer/>
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

