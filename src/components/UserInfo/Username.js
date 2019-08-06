import React, { useState } from 'react'

import { connect } from 'react-redux'


const Username = props => {

  const { username } = props

  const [ editing, setEditing ] = useState(false)
  const [ newUsername, updateUsername ] = useState('')

  const renderEditButton = () => {
    return <>
      <button onClick={() => setEditing(!editing)}>Edit</button>
    </>
  }

  const renderEditForm = () => {
    return <>
      <form>
        <input type='text' placeholder='New Username'/>
        <button>Submit</button>
        <button onClick={() => setEditing(!editing)}>Cancel</button>
      </form>
    </>
  }
  
  return(
    <>
      <label>Username: </label> <ul><li><span>{username}</span>{editing ? renderEditForm() : renderEditButton()}</li></ul>
    </>
  )
}

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Username)