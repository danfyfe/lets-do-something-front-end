import React from 'react'

import InvitationCard from '../components/InvitationCard.js'

const InvitationsContainer = props => {
  return(
    <div className='invitations-container'>

      <div className='invitations-top'>

        <div className='invitations-top-left'>
          <h4>Invitations</h4>
        </div>

        <div className='invitations-top-right'>
          <h4>Sort By</h4>
          <h4>+</h4>
        </div>

      </div>

      <InvitationCard />
      <InvitationCard />
      <InvitationCard />

    </div>
  )
}

export default InvitationsContainer