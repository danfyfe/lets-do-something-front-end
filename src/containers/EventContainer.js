import React from 'react'

import { formatTime } from '../actions/general.js'

import AttendeeCard from '../components/cards/AttendeeCard.js'
import InvitesContainer from './InvitesContainer.js'
import BudgetContainer from './BudgetContainer.js'

const EventContainer = props => {
  const { id, title, description, start, end, users, owner_id, invites, budget, costs } = props.event
  const { currentUser } = props
  const { followers } = props.currentUser

  const owner = users.find( user => user.id === owner_id)

  const isOwner = () => {
    if (props.currentUser.id === owner.id) {
      return true
    } else {
      return false
    }
  }

  const pendingInviteUsers = (followers, currentUser) => {

    let users = []

    let followersWithUser = [ ...followers, currentUser]
    invites.forEach( invite => {
      if (invite.rsvp === null) {
        let user = followersWithUser.find( follower => {
          return follower.id === invite.user.id
        })
        if (user) {
          users.push(user)
        }
      }
    })
    return users
  }


  const renderAttendeeCards = () => {
    return users.map( user => {
      return <AttendeeCard key={user.id} user={user}/>
    })
  }

  const renderEditButton = isOwner => {
    if (isOwner) {
      return <span className='link m-auto'>Edit</span>
    } else {
      return null
    }
  }

  return(
    <div className='d-flex flex-column most-width m-auto med-padding'>
      <div className='d-flex flex-row justify-content-between small-padding'>
        <span className='large-font font-weight-bold'>{title}</span>
        {renderEditButton(isOwner())}
      </div>

      <div className='d-flex flex-row justify-content-around'>
        <span className='text-muted med-font'>{formatTime(start)}</span>
        <span className='text-muted med-font'>{formatTime(end)}</span>
      </div>

      <div className='d-flex flex-column med-padding'>
        <p className='m-auto small-indent med-norm-font'>{description}</p>
        <div className='d-flex flex-column small-padding'>
          <span className='font-weight-bold small-font text-muted'>Owner:</span>
          <span className='med-font small-indent small-padding'>{owner.username}</span>
        </div>
      </div>

      <div className='d-flex flex-column m-1v'>
        <span className='font-weight-bold small-font'>Attendees</span>
        <div className='d-flex flex-column small-padding'>
          {renderAttendeeCards()}
        </div>
      </div>

      <div className='d-flex flex-column m-1v'>
        <InvitesContainer
          eventId={id}
          isOwner={isOwner} pendingInviteUsers={pendingInviteUsers(followers, currentUser)}
          users={users}/>
      </div>



      <div className='d-flex flex-column m-1v'>
        <BudgetContainer
          budget={budget}
          costs={costs}
          users={users}
          currentUserId={currentUser.id}
          eventId={id}
          isOwner={isOwner()}
        />
      </div>


    </div>
  )
}

export default EventContainer