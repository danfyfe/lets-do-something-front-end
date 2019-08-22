import React, { useState } from 'react'
import API_ENDPOINT from '../ApiEndpoint.js'

import { connect } from 'react-redux'

import ErrorMessage from '../status-messages/ErrorMessage.js'

import '../css/SignUp.css';

const SignupPage = props => {

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ passwordConfirm, setPasswordConfirm ] = useState('')
  const [ email, setEmail ] = useState('')



  const sendToLoginPage = () => {
    props.history.push('/')
  }

  const renderErrorMessage = () => {
    return <>
      <ErrorMessage errorMessage={props.state.errorMessage}/>
    </>
  }

  const createUser = (e) => {
    e.preventDefault()

    fetch(`${API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username, password, passwordConfirm, email
        }
      })
    }).then(resp=>resp.json())
      .then(data => {
        if (data.error) {
          props.setErrorMessage(data.error)
        }
        localStorage.setItem('token', data.jwt)
        if (localStorage.token !== 'undefined') {
          props.history.push('/')
        }
      })
  }

  return(
    <>
    <div className='main'>
      <div className='title container-fluid'>
        <h2>Lets Do Something!</h2>
      </div>
      <div className='signup container-fluid'>
          <h4>SignUp!</h4>
        <div className='signup-form container'>
          {props.state.errorMessage !== '' ? renderErrorMessage() : null}

          <div className='form-group'>

            <div className='row justify-content-center'>
                <input className='form-control' type='text' placeholder='Username' onChange={e => setUsername(e.target.value)}/>
            </div>

            <div className='row justify-content-center'>
              <input className='form-control' type='text' placeholder='Email' onChange={e => setEmail(e.target.value)}/>
            </div>

            <div className='row justify-content-center'>
              <input className='form-control' type='password' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
            </div>

            <div className='row justify-content-center'>
              <input className='form-control' type='password' placeholder='Confirm Password' onChange={e => setPasswordConfirm(e.target.value)}/>
            </div>

            <div className='row justify-content-center'>
              <button onClick={createUser}>Sign up</button>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {
    setErrorMessage: errorMessage => dispatch({type:'SET_ERROR_MESSAGE', errorMessage})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignupPage)