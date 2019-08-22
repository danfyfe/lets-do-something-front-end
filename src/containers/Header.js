import React from 'react'

import '../css/Header.css';

import Dropdown from '../containers/Dropdown.js'

const Header = props => {
  return (<>
    <div className='header d-flex justify-content-between'>

        <img className='logo' src='https://i.imgur.com/vd654cN.png' alt='logo of dance party'/>


        <h2 className=''>Let's Do Something!</h2>

        <Dropdown history={props.history}/>

    </div>
  </>)
}

export default Header