import React from 'react'

import { connect } from 'react-redux'

const Feed = props => {
  return(
    <>
      feed
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

