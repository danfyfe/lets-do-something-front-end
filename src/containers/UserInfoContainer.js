import React from 'react'

import { connect } from 'react-redux'


class UserInfoContainer extends React.Component {
  render(){
    console.log(this.props.user)
    const { username, email } = this.props.user
    return (<>
      <div className='user-info-container'>
        <label>Username: </label> <ul><li>{username}</li></ul>
        <label>First Name: </label> <ul><li>{}</li></ul>
        <label>Last Name: </label> <ul><li>{}</li></ul>
        <label>Email: </label> <ul><li>{email}</li></ul>
      </div>
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