import React, { useState } from 'react'

import { connect } from 'react-redux'

import API_ENDPOINT from '../../ApiEndpoint.js'


const EditUserInfo = props => {
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
    <div className='m-auto'>
      <button onClick={() => setEditing(!editing)}>Edit</button>
    </div>
    </>
  }

  const renderEditForm = () => {
    return <>
      <div className='d-flex m-auto'>
        <input type='text' placeholder={'New ' + attributeTitle} onChange={(e) => setNewAttribute(e.target.value)}/>
        <button onClick={updateAttribute}>Submit</button>
        <button onClick={() => setEditing(!editing)}>Cancel</button>
      </div>
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
    <div className='d-flex flex-column'>
      <label>{attributeTitle}</label><ul><li><span>{value}</span></li></ul>{editing ? renderEditForm() : renderEditButton()}
    </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(EditUserInfo)