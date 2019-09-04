import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InviteSelect = props => {
  const { followers, addSelectValue } = props

  const options = () => {
    return followers.map( follower => {
      return <option key={follower.id} value={follower.username}>{follower.username}</option>
    })
  }

  return(<>
    <div className='d-flex justify-content-between'>
      <select className='most-width m-1v' onChange={e => addSelectValue(e.target.value)}>
        <option value=''>Select a Friend to Invite!</option>
        {options()}
      </select>
      <div className='m-auto'>
        <FontAwesomeIcon icon='times' />
      </div>
    </div>
  </>)
}

const mapStateToProps = state => {
  return {
    followers: state.currentUser.followers
  }
}

export default connect(mapStateToProps, null)(InviteSelect)