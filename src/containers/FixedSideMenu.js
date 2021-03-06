import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import UserMessagesContainer from '../containers/UserMessagesContainer.js'

const FixedSideMenu = props => {

  const [ open, setOpen ] = useState(false)

  const renderOpenCloseIcon = () => {
    if (open) {
      return   <FontAwesomeIcon icon='angle-double-right' onClick={()=>setOpen(false)}/>
    } else {
      return   <FontAwesomeIcon icon='angle-double-left' onClick={()=>setOpen(true)}/>
    }
  }

  return(
    <div className='fixed-side-menu'>
    {open ? <UserMessagesContainer/> :
      <>
        <div className='top med-font'>
        <span>Messages</span>
        </div>
      </>
    }
      <div className='fixed-side-menu-bottom container'>
        {renderOpenCloseIcon()}
      </div>
    </div>
  )

}

export default FixedSideMenu