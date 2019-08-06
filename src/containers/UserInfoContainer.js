import React from 'react'

import { connect } from 'react-redux'

import '../css/UserInfoContainer.css';


class UserInfoContainer extends React.Component {
  render(){
    return (<>

      </>)
  }
}

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserInfoContainer)