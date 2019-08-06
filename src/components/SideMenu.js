import React, { useState } from 'react'

import '../css/SideMenu.css'

const SideMenu = props => {

  const [ menuOpen, setMenuOpen] = useState(false)

  const sideMenu = () => {
    return <>
      <div className='side-menu'>
        <button className='close-button' onClick={()=>setMenuOpen(!menuOpen)}>Close</button>
        <button className='side-menu-link' onClick={()=>props.history.push('/user')}>User</button>
      </div>
    </>
  }
  return(
    <>
      {menuOpen ? sideMenu() : null}
      <div className='side-menu-button-container'>
        <button onClick={()=>setMenuOpen(!menuOpen)}>☰</button>
      </div>
    </>
  )
}

export default SideMenu