import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'

import UserMessagesContainer from '../containers/UserMessagesContainer.js'

const FixedSideMenu = props => {

  const [ open, setOpen ] = useState(false)

  const renderOpenCloseIcon = () => {
    if (open) {
      return   <Icon onClick={()=>setOpen(false)} size='large' name='angle double right'/>
    } else {
      return   <Icon onClick={()=>setOpen(true)} size='large' name='angle double left'/>
    }
  }

  return(
    <div className='fixed-side-menu'>
      <div className='top'>
        <h6>Messages</h6>
      </div>
      <div className='middle'>
        {open ? <UserMessagesContainer/> : null}
      </div>
      <div className='bottom'>
        {renderOpenCloseIcon()}
      </div>
    </div>
  )

}

export default FixedSideMenu