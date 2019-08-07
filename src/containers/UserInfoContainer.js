import React from 'react'

import { connect } from 'react-redux'

import Username from '../components/UserInfo/Username.js'
import FirstName from '../components/UserInfo/FirstName.js'
import EditUserInfo from '../components/UserInfo/EditUserInfo.js'

class UserInfoContainer extends React.Component {
  render(){

    const { username } = this.props.user
    console.log('this.props.user',this.props.user)

    const renderEditUserInfos = () => {
      let attributeObjs = []

      for(let attribute in this.props.user) {
        let attributeObj = {}
        attributeObj[attribute] = this.props.user[attribute]

        attributeObjs.push(attributeObj)
      }

    }


    return (<>
      <div className='user-info-container'>
        {renderEditUserInfos()}
        {/*<Username username={username}/>
        <FirstName username={username} first_name={first_name}/>
        <label>Last Name: </label> <ul><li><span>{lastName}</span><button>Edit</button></li></ul>
        <label>Email: </label> <ul><li><span>{email}</span><button>Edit</button></li></ul>
        <label>Date of Birth: </label> <ul><li><span>{dob}</span><button>Edit</button></li></ul>
        <label>Avatar: </label> <ul><li><span><img src={avatar} alt='user avatar'/></span><button>Edit</button></li></ul>*/}
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