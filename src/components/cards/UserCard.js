import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserCard = props => {
  // console.log(props.user)

  const { username, image, first_name, last_name } = props.user

  const requestFriend = username => {
    
  }

  return(
    <div className='user-card d-flex flex-row justify-content-between yellow-background med-padding'>

      <div className='d-flex flex-column justify-content-between med-padding'>
        {/*<img className='user-image' src='' alt='user avatar'/>*/}

        <span className='text-nowrap font-weight-bold med-font med-padding m-auto'>{username}</span>
        {/*<span className='text-muted small-font'>{first_name + ' ' + last_name}</span>*/}
      </div>

      <div className='d-flex flex-column small-padding half-width'>
        <FontAwesomeIcon className='m-auto' icon='user-plus' onClick={()=>requestFriend(username)}/>
      </div>

    </div>
  )
}

export default UserCard