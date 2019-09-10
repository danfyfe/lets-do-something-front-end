import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import API_ENDPOINT from '../../ApiEndpoint.js'

const InviteCard = props => {

  const { event } = props.invite
  const { id } = props.invite
  const { removeInviteCard, addEventFromInvite } = props

  const redirectToEventPage = eventId => {
    props.history.push(`events/${eventId}`)
  }

  const rsvp = rsvp => {
    fetch(`${API_ENDPOINT}/events/${event.id}/invites/${id}`, {
      method:'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        rsvp
      })
    }).then(resp=>resp.json())
    .then( result => {
      if (!result.status) {
        const { invite, event } = result
        removeInviteCard(invite.id)
        addEventFromInvite(event)
      } else {
        const { invite } = result
        removeInviteCard(invite.id)
      }
    })
  }



  return(
    <div className='d-flex flex-row yellow-background border-r med-padding m-1v'>

      <div className='d-flex half-width justify-content-between'>
        <span className='link small-font font-weight-bold text-nowrap' onClick={()=>redirectToEventPage(event.id)}>{event.title}</span>
      </div>

      <div className ='d-flex half-width small-font justify-content-between'>
        <FontAwesomeIcon
          icon='thumbs-up'
          className='m-auto'
          onClick={() => rsvp(true)}/>
        <FontAwesomeIcon
          icon='thumbs-down'
          className='m-auto'
          onClick={() => rsvp(false)}/>
      </div>

    </div>
  )

}

export default InviteCard