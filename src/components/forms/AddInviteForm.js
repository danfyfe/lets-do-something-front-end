import React, { useState } from 'react'
import { connect } from 'react-redux'
// import InviteSelect from './InviteSelect.js'

const AddInviteForm = props => {
  const [ invitees, setInvitees ] = useState([])

  const { followers } = props


  const handleChange = e => {
    if (e.target.checked) {
      setInvitees([...invitees, e.target.value])
    } else {
      let index = invitees.indexOf(e.target.value)
      invitees.splice(index, 1)
    }
  }

  const followerInputs = () => {
    return followers.map( follower => {
      return <div key={follower.id} className='d-flex'>

          <div className='col-sm'>
            <label className='small-font'>{follower.username}</label>
          </div>

          <div className='col-sm'>
            <input className='' type='checkbox' value={follower.username} onChange={handleChange}/>
          </div>

      </div>
    })
  }


  console.log('invitees',invitees)

  return(
    <div className='d-flex flex-column m-1v med-padding'>

      <span className='small-font m-auto'>Select Friends to Invite!</span>

      <div className='d-flex flex-column b-thin med-padding'>
        {followerInputs()}
      </div>

      <button className='small-font full-width' value='submit'>Send Invites!</button>

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