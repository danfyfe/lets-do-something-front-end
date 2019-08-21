import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'

import UserMessagesContainer from '../containers/UserMessagesContainer.js'

const FixedSideMenu = props => {

  const [ open, setOpen ] = useState(true)

  const renderOpenCloseIcon = () => {
    if (open) {
      return   <Icon link onClick={()=>setOpen(false)} size='large' name='angle double right'/>
    } else {
      return   <Icon link onClick={()=>setOpen(true)} size='large' name='angle double left'/>
    }
  }

  return(
    <div className='fixed-side-menu'>
    {open ? <UserMessagesContainer/> :
      <>
        <div className='top'>
        <h6>Messages</h6>
        </div>
        <div className='middle'>
        </div>
      </>
    }
      <div className='fixed-side-menu-bottom'>
        {renderOpenCloseIcon()}
      </div>
    </div>
  )

}

export default FixedSideMenu