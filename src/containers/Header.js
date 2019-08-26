import React from 'react'

import '../css/Header.css';

import SideModal from '../containers/SideModal.js'

const Header = props => {
  return (<>
    <div className='header d-flex justify-content-between'>

        <img className='logo' src='https://i.imgur.com/z0gkiOz.png' alt='logo of dance party'/>

        <h4 className='m-auto text-center'>Let's Do Something!</h4>

        <SideModal user={props.user} history={props.history}/>

    </div>
  </>)
}

export default Header