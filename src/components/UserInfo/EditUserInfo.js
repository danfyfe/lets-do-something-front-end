import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { connect } from 'react-redux'

import API_ENDPOINT from '../../ApiEndpoint.js'


const EditUserInfo = props => {
  const axios = require('axios');

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
    attributeTitle += capitalziedWord
  }

  const renderEditButton = () => {
    return <>
    <div className='m-auto small-font'>
      <FontAwesomeIcon icon='edit' onClick={() => setEditing(!editing)}/>
    </div>
    </>
  }

  const renderEditForm = () => {
    return <>
      <div className='d-flex flex-row mr-auto my-auto'>
        <input className='' type='text' placeholder={'New ' + attributeTitle} onChange={(e) => setNewAttribute(e.target.value)}/>
        <div className='d-flex flex-row justify-content-around half-width m-auto'>
            <FontAwesomeIcon className='small-padding ' icon='thumbs-up' onClick={updateAttribute}/>
            <FontAwesomeIcon className='small-padding ' icon='times' onClick={() => setEditing(!editing)}/>
        </div>
      </div>
    </>
  }

  const updateAttribute = (e) => {
    e.preventDefault()

    axios({
      method: 'PATCH',
      url: `${API_ENDPOINT}/users/${attribute}`,
      headers: {
        Authorization:  localStorage.getItem("token"),
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      data: {
        username: username, attribute: newAttributeObj
      }
    })
    .then( resp => {
      if (resp.data.error) {
        props.setErrorMessage(resp.data.error)
      } else {
        props.setCurrentUser(resp.data.user)
        setEditing(!editing)
      }
    })
  }



  return(
    <div className='d-flex flex-column'>
    <div className='d-flex'>
      <span className='med-norm-font med-padding text-nowrap'>{attributeTitle}:</span>
      {editing ? renderEditForm() : <span className='med-norm-font font-weight-bold med-padding text-nowrap'>{value}</span>}
      <div className='ml-auto my-auto'>
        {editing ? null : renderEditButton()}
      </div>
    </div>
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