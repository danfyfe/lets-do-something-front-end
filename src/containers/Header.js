import React from 'react'

import '../css/Header.css';


const Header = props => {
  return (<>
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src='https://i.imgur.com/z0gkiOz.png' alt='logo of dance party'/>
      </div>
      <div className='title-container'>
        <h1 className='title'>Let's Do Something!</h1>
      </div>

    </div>
  </>)
}

export default Header