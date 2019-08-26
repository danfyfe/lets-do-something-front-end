import React, { useState } from 'react'

import { connect } from 'react-redux'

import API_ENDPOINT from '../../ApiEndpoint.js'


const LastName = props => {

  const { last_name, username } = props

  const [ editing, setEditing ] = useState(false)
  const [ newLastName, setNewFirstName ] = useState('')

  const renderEditButton = () => {
    return <>
      <button onClick={() => setEditing(!editing)}>Edit</button>
    </>
  }

  const renderEditForm = () => {
    return <>
      <form>
        <input type='text' placeholder='First Name' onChange={(e) => setNewFirstName(e.target.value)}/>
        <button onClick={updateFirstName}>Submit</button>
        <button onClick={() => setEditing(!editing)}>Cancel</button>
      </form>
    </>
  }

  const updateFirstName = (e) => {
    e.preventDefault()

    fetch(`${API_ENDPOINT}/users/firstname`, {
      method: 'PATCH',
      headers: {
        Authorization:  localStorage.getItem("token"),
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        username: username, firstName: { first_name: newFirstName }
      })
    }).then(resp=>resp.json())
    .then( data => {
      console.log(data)
      if (data.error) {
        props.setErrorMessage(data.error)
      } else {
        props.setCurrentUser(data.user)
        setEditing(!editing)
      }
    })
  }

  return(
    <>
      <label>Last Name: </label> <ul><li><span>{last_name}</span>{editing ? renderEditForm() : renderEditButton()}</li></ul>
    </>
  )
}

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch({type:'SET_CURRENT_USER', user}),
    setErrorMessage: errorMessage => dispatch({type:'SET_ERROR_MESSAGE', errorMessage})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LastName)