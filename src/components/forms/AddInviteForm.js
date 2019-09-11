import React, { useState } from 'react'
import { connect } from 'react-redux'

import API_ENDPOINT from '../../ApiEndpoint.js'

const AddInviteForm = props => {

  const [ inviteeIds, setInviteeIds ] = useState([])

  const { followers, eventId, setAdding, setPendingRSVPs, users } = props

  const handleChange = e => {
    if (e.target.checked) {
      setInviteeIds([...inviteeIds, e.target.value])
    } else {
        let index = inviteeIds.indexOf(e.target.value)
        inviteeIds.splice(index, 1)
    }
  }

  const renderFollowerInputs = () => {

  
    return followers.map( follower => {

      return <div key={follower.id} className='d-flex'>

          <div className='col-sm'>
            <label className='small-font m-auto'>{follower.username}</label>
          </div>

          <div className='col-sm'>
            <input className='m-auto' type='checkbox' value={follower.id} onChange={handleChange}/>
          </div>

      </div>
    })
  }

  const createInvites = () => {
    fetch(`${API_ENDPOINT}/events/${eventId}/invites`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: 'application/json',
        Authorization:  localStorage.getItem("token")
      },
      body: JSON.stringify({
        inviteeIds
      })
    }).then(resp=>resp.json())
    .then( results => {
      setAdding(false)
      setPendingRSVPs(results)
    })
  }

  return(
    <div className='d-flex flex-column m-1v med-padding'>

      <span className='small-font m-auto'>Select Friends to Invite!</span>

      <div className='d-flex flex-column b-thin med-padding'>
        {renderFollowerInputs()}
      </div>

      <button className='small-font full-width' onClick={createInvites}>Send Invites!</button>
      <button className='small-font full-width'
      onClick={() => setAdding(false)}>Cancel</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    followers: state.currentUser.followers
  }
}

export default connect(mapStateToProps, null)(AddInviteForm)




  // const { eventId, inputs, removeSpecificSelect, values, setValues } = props
  //
  // const addSelectValue = (value, id) => {
  //   setValues([...values, {id, value}])
  //   console.log('VALUE', value)
  //   console.log('ID', id)
  // }
  //
  // const removeSelectValue = id => {
  //   let selectValue = values.find( value => value.id === id)
  //   let index = values.indexOf(selectValue)
  //
  //   values.splice(index, 1)
  //
  //   console.log('VALUES',values)
  // }
  //
  // const renderSelects = () => {
  //   return inputs.map( input => {
  //     return <InviteSelect
  //     id={input}
  //     key={input}
  //     addSelectValue={addSelectValue}
  //     removeSelectValue={removeSelectValue}
  //     removeSpecificSelect={removeSpecificSelect}/>
  //   })
  // }