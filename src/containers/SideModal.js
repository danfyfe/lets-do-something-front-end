import React, { useState } from 'react'

import { connect } from 'react-redux'

// import '../css/SideMenu.css'

const SideModal = props => {
  const [ menuOpen, setMenuOpen] = useState(false)

  const handleLogOut = () => {
    localStorage.clear()
    props.setCurrentUser({})
    props.history.push('/')
  }

  const renderSideModal = () => {
    const { image, username } = props.user
    return <>
      <div className='dropdown-background'>
      </div>

      <div className='df-side-modal'>
        <div className='user-container'>
          <img className='user-image' src={image} alt='user avatar'/>
          <span className='user-name'>{username}</span>
        </div>
        <hr width={75}/>
        <button className='close-button' onClick={()=>setMenuOpen(!menuOpen)}>Close</button>
        <hr width={25}/>
        <button onClick={()=>props.history.push('/home')}>Home</button>
        <hr width={25}/>
        <button onClick={()=>props.history.push('/profile')}>Profile</button>
        <hr width={25}/>
        <button onClick={handleLogOut}>Log Out</button>
      </div>


    </>
  }

  return(
    <>
      <div className='dropdown m-auto'>
        <button className='dropdown-button' type='button' id='dropdownMenuButton' aria-haspopup="true" aria-expanded="false" onClick={()=>setMenuOpen(!menuOpen)}>☰</button>
        {menuOpen ? renderSideModal() : null}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    state
   }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch({type:'SET_CURRENT_USER', user})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SideModal)

// <div className='side-menu'>
//   <button className='close-button' onClick={()=>setMenuOpen(!menuOpen)}>Close</button>
//   <button className='side-menu-link' onClick={()=>props.history.push('/home')}>Home</button>
//   <button className='side-menu-link' onClick={()=>props.history.push('/profile')}>Profile</button>
//   <button className='side-menu-link' onClick={handleLogOut}>LogOut</button>
// </div>


// <div className='dropdown-menu' aria-labelledby="dropdownMenuButton">
//   <button className='dropdown-item'>Hi</button>
// </div>