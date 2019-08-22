import React, { useState } from 'react'

// import '../css/SideMenu.css'

const Dropdown = props => {

  const [ menuOpen, setMenuOpen] = useState(false)

  const handleLogOut = () => {
    localStorage.clear()
    props.history.push('/')
  }

  const dropDownMenu = () => {
    return <>
      <div className='dropdown'>
        <button className='close-button' onClick={()=>setMenuOpen(!menuOpen)}>Close</button>
        <button className='side-menu-link' onClick={()=>props.history.push('/home')}>Home</button>
        <button className='side-menu-link' onClick={()=>props.history.push('/profile')}>Profile</button>
        <button className='side-menu-link' onClick={handleLogOut}>LogOut</button>
      </div>
    </>
  }

  return(
    <>
      <div className='dropdown m-auto'>
        <button className='dropdown-button'aria-haspopup="true" aria-expanded="false" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        {menuOpen?
          <>
            {dropDownMenu()}
          </> : null
        }
      </div>
    </>
  )
}

export default Dropdown

// <div className='side-menu'>
//   <button className='close-button' onClick={()=>setMenuOpen(!menuOpen)}>Close</button>
//   <button className='side-menu-link' onClick={()=>props.history.push('/home')}>Home</button>
//   <button className='side-menu-link' onClick={()=>props.history.push('/profile')}>Profile</button>
//   <button className='side-menu-link' onClick={handleLogOut}>LogOut</button>
// </div>


//
// <button className='dropdown-button' type='button' id='dropdownMenuButton' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">☰</button>
// <div className='dropdown-menu' aria-labelledby="dropdownMenuButton">
//   <a className='dropdown-item'>Hi</a>
// </div>