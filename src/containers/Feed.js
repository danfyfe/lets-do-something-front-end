import React from 'react'

import { connect } from 'react-redux'

import UserMessagesContainer from './UserMessagesContainer.js'
import '../css/HomePage.css';


const Feed = props => {
  return(
    <>

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

