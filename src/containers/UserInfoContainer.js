import React from 'react'

import { connect } from 'react-redux'

// import Username from '../components/UserInfo/Username.js'
// import FirstName from '../components/UserInfo/FirstName.js'
import EditUserInfo from '../components/UserInfo/EditUserInfo.js'
import EditUserImage from '../components/UserInfo/EditUserImage.js'

const UserInfoContainer = props => {
    const { username, image } = props.user

    const renderEditUserInfos = () => {
      let attributeObjs = []

      for(let attribute in props.user) {
        let attributeObj = {}

        attributeObj[attribute] = props.user[attribute]

        attributeObjs.push(attributeObj)
      }

      let usableAttributesObjs = attributeObjs.slice(0,4)

      return usableAttributesObjs.map(attributeObj => {
        return <EditUserInfo key={Object.keys(attributeObj)[0]} username={username} attributeObj={attributeObj}/>
      })
    }

    return (<>
      <div className='d-flex flex-column med-padding'>
        {renderEditUserInfos()}
        <EditUserImage imageUrl={image}/>
      </div>
      </>)
  }


const mapStateToProps = state => {
  return { state }
}


export default connect(mapStateToProps, null)(UserInfoContainer)