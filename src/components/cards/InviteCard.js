import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const InviteCard = props => {

  const { id, title } = props.invite.event

  const redirectToEventPage = eventId => {
    props.history.push(`events/${eventId}`)
  }

  const acceptInvite = () => {

  }

  const rejectInvite = () => {
    
  }

  return(
    <div className='d-flex flex-row yellow-background border-r med-padding'>

      <div className='d-flex half-width justify-content-between'>
        <span className='link small-font font-weight-bold text-nowrap' onClick={()=>redirectToEventPage(id)}>{title}</span>
      </div>

      <div className ='d-flex half-width small-font justify-content-between'>
        <FontAwesomeIcon icon='thumbs-up' className='m-auto'/>
        <FontAwesomeIcon icon='thumbs-down' className='m-auto'/>
      </div>

    </div>
  )

}

export default InviteCard