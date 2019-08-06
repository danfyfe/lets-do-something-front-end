import React from 'react'

import { connect } from 'react-redux'

import Username from '../components/UserInfo/Username.js'


class UserInfoContainer extends React.Component {
  render(){
    console.log(this.props.user)
    const { username, email, firstName, lastName, dob, avatar } = this.props.user
    return (<>
      <div className='user-info-container'>
        <Username username={username}/>
        <label>First Name: </label> <ul><li><span>{firstName}</span><button>Edit</button></li></ul>
        <label>Last Name: </label> <ul><li><span>{lastName}</span><button>Edit</button></li></ul>
        <label>Email: </label> <ul><li><span>{email}</span><button>Edit</button></li></ul>
        <label>Date of Birth: </label> <ul><li><span>{dob}</span><button>Edit</button></li></ul>
        <label>Avatar: </label> <ul><li><span><img src={avatar} alt='user avatar'/></span><button>Edit</button></li></ul>
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