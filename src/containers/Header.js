import React from 'react'

import '../css/Header.css';

import SideModal from '../containers/SideModal.js'

const Header = props => {
  const { history, user } = props
  return (<>
    <div className='d-flex justify-content-between yellow-background'>

      <div className='m-auto'>
        <img className='logo' src='https://i.imgur.com/z0gkiOz.png' alt='logo of dance party' onClick={() => history.push('/')}/>
      </div>

      <div className='m-auto'>
        <h4 className='m-auto text-center '>Let's Do Something!</h4>
      </div>

      <div className='m-auto'>
        <SideModal user={user} history={history}/>
      </div>

    </div>
  </>)
}

export default Header