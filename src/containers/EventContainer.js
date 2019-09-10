import React from 'react'

import { formatTime } from '../actions/general.js'

import AttendeeCard from '../components/cards/AttendeeCard.js'
import InvitesContainer from './InvitesContainer.js'

const EventContainer = props => {
  const { id, title, description, start, end, users, owner_id, invites } = props.event
  const { currentUser } = props
  const { followers } = props.currentUser

  const pendingInviteUsers = () => {
    let users = []
    let followersWithUser = [ ...followers, currentUser]
    invites.forEach( invite => {
      if (invite.rsvp === null) {
        let user = followersWithUser.find( follower => {
          return follower.id === invite.user_id
        })
        if (user) {
          users.push(user)
        }
      }
    })
    return users
  }

  const owner = users.find( user => user.id === owner_id)

  const isOwner = () => {
    if (props.currentUser.id === owner.id) {
      return true
    } else {
      return false
    }
  }

  const renderAttendeeCards = () => {
    return users.map( user => {
      return <AttendeeCard key={user.id} user={user}/>
    })
  }

  return(
    <div className='d-flex flex-column most-width m-auto med-padding'>
      <div className='d-flex flex-row justify-content-between small-padding'>
        <span className='large-font font-weight-bold'>{title}</span>
        <span className='link m-auto'>Edit</span>
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
        <InvitesContainer eventId={id} isOwner={isOwner} pendingInviteUsers={pendingInviteUsers()}/>
      </div>


    </div>
  )
}

export default EventContainer