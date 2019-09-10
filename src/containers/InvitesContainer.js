import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AddInviteForm from '../components/forms/AddInviteForm.js'
import AttendeeCard from '../components/cards/AttendeeCard.js'

const InvitesContainer = props => {

  const [ adding, setAdding ] = useState(false)
  const [ pendingRSVPs, setPendingRSVPs] = useState([])

  const { eventId, isOwner } = props

  const renderAttendeeCards = () => {
    return pendingRSVPs.map( user => {
      return <AttendeeCard key={user.id} user={user}/>
    })
  }

  const renderAddInviteIcon = () => {
    return isOwner() ?  <FontAwesomeIcon className='' icon='plus' onClick={()=>setAdding(true)}/> : null
  }

  return(<>
    <div>
      <div className='d-flex justify-content-between'>

        <span className='font-weight-bold small-font'>Invites</span>
        <div className='d-flex'>
          {renderAddInviteIcon()}
        </div>
      </div>

      {adding ? <AddInviteForm setAdding={setAdding} eventId={eventId} setPendingRSVPs={setPendingRSVPs}/> : null}


      <div>
        <span className='small-font text-muted'>Pending</span>
        {renderAttendeeCards()}
      </div>

    </div>
  </>)
}

export default InvitesContainer