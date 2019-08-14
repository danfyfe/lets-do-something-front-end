import React from 'react'

import InvitationCard from '../components/InvitationCard.js'

const InvitationsContainer = props => {
  return(
    <div className='invitations-container'>

      <div className='invitations-top'>

        <div className='invitations-top-left'>
          <span>Invitations</span>
        </div>

        <div className='invitations-top-right'>
          <span>+</span>
        </div>

      </div>

      <InvitationCard />
      <InvitationCard />
      <InvitationCard />

    </div>
  )
}

export default InvitationsContainer