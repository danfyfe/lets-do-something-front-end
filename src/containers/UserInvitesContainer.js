import React, { useState } from 'react'

import { connect } from 'react-redux'

import InviteCard from '../components/cards/InviteCard.js'
import NoContentMessageCard from '../components/cards/NoContentMessageCard.js'


const UserInvitesContainer = props => {

  const { invites, history, setEvents, events } = props
  const [ userInvites, setUserInvites ] = useState(invites)

  const removeInviteCard = inviteId => {
    setUserInvites( prevUserInvites => {
      return userInvites.filter( invite => {
        return invite.id !== inviteId
      })
    })
  }

  const addEventFromInvite = event => {
    setEvents([...events, event])
  }

  const renderInviteCard = () => {
    return userInvites.map( invite => {
      if (invite.rsvp === null) {
        return <InviteCard history={history} key={invite.id} invite={invite} removeInviteCard={removeInviteCard} addEventFromInvite={addEventFromInvite}/>
      } else {
        return null
      }
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

const mapStateToProps = state => {
  return {
    events: state.events
   }
}

const mapDispatchToProps = dispatch => {
  return {
    setEvents: events => dispatch({type:'SET_EVENTS', events}),
    fetching: () => dispatch({type:'FETCHING'}),
    fetched: () => dispatch({type:'FETCHED'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserInvitesContainer)