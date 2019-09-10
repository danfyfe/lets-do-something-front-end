import React, { useState } from 'react'

import { connect } from 'react-redux'


import API_ENDPOINT from '../../ApiEndpoint.js'


const EditUserImage = props => {
  const { username, imageUrl } = props

  const [ newAttribute ] = useState('')




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

      }
    })
  }

  return(
    <>
      <label>Image:</label> <ul><li><span><img href={imageUrl} alt='user avatar'/></span><button onClick={updateAttribute} id='upload_widget'>Upload</button></li></ul>
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