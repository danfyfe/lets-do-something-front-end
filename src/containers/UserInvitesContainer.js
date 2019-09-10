import React from 'react'

import InviteCard from '../components/cards/InviteCard.js'
import NoContentMessageCard from '../components/cards/NoContentMessageCard.js'


const UserInvitesContainer = props => {

  const { invites, history } = props

  const renderInviteCard = () => {
    return invites.map( invite => {
      return <InviteCard history={history} key={invite.id} invite={invite}/>
    })
  }

  return(
    <div className='d-flex flex-column white-background med-padding border-r m-1v'>

      <div className='d-flex'>
        <span>Invites</span>
      </div>

      <div className=''>
        {props.invites.length === 0 ? <NoContentMessageCard type={'follow requests'}/> : renderInviteCard()}
      </div>

    </div>
  )
}

export default UserInvitesContainer