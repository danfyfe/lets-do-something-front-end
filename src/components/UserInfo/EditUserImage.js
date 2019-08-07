import React, { useState } from 'react'

import { connect } from 'react-redux'

import API_ENDPOINT from '../../ApiEndpoint.js'


const EditUserImage = props => {
  const { username, imageUrl } = props

  const [ editing, setEditing ] = useState(false)
  const [ newAttribute, setNewAttribute ] = useState('')

  const renderEditButton = () => {
    return <>
      <button onClick={() => setEditing(!editing)}>Edit</button>
    </>
  }

  const renderEditForm = () => {
    return <>
      <form>
        <input type='text' placeholder='New Image' onChange={(e) => setNewAttribute(e.target.value)}/>
        <button onClick={updateAttribute}>Submit</button>
        <button onClick={() => setEditing(!editing)}>Cancel</button>
      </form>
    </>
  }

  const updateAttribute = (e) => {
    e.preventDefault()

    fetch(`${API_ENDPOINT}/users/image`, {
      method: 'PATCH',
      headers: {
        Authorization:  localStorage.getItem("token"),
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        username: username, attribute: { attribute: newAttribute }
      })
    }).then(resp=>resp.json())
    .then( data => {
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
      <label>Image:</label> <ul><li><span><img href={imageUrl} alt='user avatar'/></span>{editing ? renderEditForm() : renderEditButton()}</li></ul>
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

export default connect(mapStateToProps,mapDispatchToProps)(EditUserImage)