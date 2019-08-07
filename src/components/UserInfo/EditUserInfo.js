import React, { useState } from 'react'

import { connect } from 'react-redux'

import API_ENDPOINT from '../../ApiEndpoint.js'


const EditUserImage = props => {
  const [ editing, setEditing ] = useState(false)
  const [ newAttribute, setNewAttribute ] = useState('')

  const { username } = props

  const attribute = Object.keys(props.attributeObj)[0]
  const value = Object.values(props.attributeObj)[0]

  const newAttributeObj = {}
  newAttributeObj[`${attribute}`] = newAttribute

  const attributeWords = attribute.split('_')

  let attributeTitle = ''

  for (var i = 0; i < attributeWords.length; i++) {
    let firstLetter = attributeWords[i].charAt(0).toUpperCase()
    let restOfWord = attributeWords[i].slice(1)
    let capitalziedWord = firstLetter + restOfWord
    attributeTitle += capitalziedWord + ' '
  }



  const renderEditButton = () => {
    return <>
      <button onClick={() => setEditing(!editing)}>Edit</button>
    </>
  }

  const renderEditForm = () => {
    return <>
      <form>
        <input type='text' placeholder={'New ' + attributeTitle} onChange={(e) => setNewAttribute(e.target.value)}/>
        <button onClick={updateAttribute}>Submit</button>
        <button onClick={() => setEditing(!editing)}>Cancel</button>
      </form>
    </>
  }

  const updateAttribute = (e) => {
    e.preventDefault()

    fetch(`${API_ENDPOINT}/users/${attribute}`, {
      method: 'PATCH',
      headers: {
        Authorization:  localStorage.getItem("token"),
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        username: username, attribute: newAttributeObj
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
      <label>{attributeTitle}:</label> <ul><li><span>{value}</span>{editing ? renderEditForm() : renderEditButton()}</li></ul>
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