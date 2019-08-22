import React from 'react'

import '../css/Header.css';

import Dropdown from '../containers/Dropdown.js'

const Header = props => {
  return (<>
    <div className='header d-flex justify-content-between'>

        <img className='logo' src='https://i.imgur.com/z0gkiOz.png' alt='logo of dance party'/>

        <h4 className='m-auto text-center'>Let's Do Something!</h4>

        <Dropdown history={props.history}/>

    </div>
  </>)
}

export default Header