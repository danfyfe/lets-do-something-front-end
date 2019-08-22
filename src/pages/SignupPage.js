import React, { useState } from 'react'
import API_ENDPOINT from '../ApiEndpoint.js'

import { connect } from 'react-redux'

import ErrorMessage from '../status-messages/ErrorMessage.js'

// import '../css/SignUp.css';

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
      <div className='title-container'>
      <h1>Lets Do Something!</h1>
      </div>
      <div className='signup-container'>
        <div className='signup-form-container'>

          <h3>SignUp!</h3>

          {props.state.errorMessage !== '' ? renderErrorMessage() : null}
          <form className='signup-form'>

            <label>Username</label>
            <input className='signup-input' type='text' placeholder='Username' onChange={e => setUsername(e.target.value)}/>

            <label>Email</label>
            <input className='signup-input' type='text' placeholder='Email' onChange={e => setEmail(e.target.value)}/>

            <label>Password</label>
            <input className='signup-input' type='password' placeholder='Password' onChange={e => setPassword(e.target.value)}/>

            <label>Confirm Password</label>
            <input className='signup-input' type='password' placeholder='Confirm Password' onChange={e => setPasswordConfirm(e.target.value)}/>

            <div className='signup-button-container'>
              <button onClick={createUser}>Submit</button>
              <button onClick={sendToLoginPage}>Cancel</button>
            </div>
          </form>
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