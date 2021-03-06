import React, { useState } from 'react'
import API_ENDPOINT from '../ApiEndpoint.js'

import { connect } from 'react-redux'

import ErrorMessage from '../status-messages/ErrorMessage.js'


const SignupPage = props => {

  const axios = require('axios');

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

    axios({
      method: 'POST',
      url: `${API_ENDPOINT}/users`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      data: {
        user: {
          username, password, passwordConfirm, email
        }
      }
    })
      .then(resp => {
        if (resp.data.error) {
          props.setErrorMessage(resp.data.error)
        }
        localStorage.setItem('token', resp.data.jwt)
        if (localStorage.token !== 'undefined') {
          props.history.push('/')
        }
      })
  }

  return(
    <>
    <div className='main'>
      <div className='title container-fluid text-center'>
        <h2>Lets Do Something!</h2>
      </div>
      <div className='container d-flex'>
        <img className='logo m-auto' src='https://i.imgur.com/z0gkiOz.png' alt='logo of dance party'/>
      </div>

      <div className='signup container text-center'>
          <h4>SignUp!</h4>

        <div className='signup-form container'>

          {props.state.errorMessage !== '' ? renderErrorMessage() : null}

          <form className='d-flex flex-column'>

            <div className='form-row m-auto'>
              <div className='col-auto'>
                <input
                  className='login-input'
                  id='usernameInput'
                  type='text' placeholder='Username'
                  onChange={e => setUsername(e.target.value)}/>
              </div>
            </div>

            <div className='form-row m-auto'>
              <div className='col-auto'>
                <input
                  className='login-input' type='email' placeholder='Email' onChange={e => setEmail(e.target.value)}/>
              </div>
            </div>

            <div className='form-row m-auto'>
              <div className='col-auto'>
                <input
                  className='login-input' type='password' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
              </div>
            </div>

            <div className='form-row m-auto'>
              <div className='col-auto'>
                <input
                  className='login-input' type='password' placeholder='Confirm Password' onChange={e => setPasswordConfirm(e.target.value)}/>
              </div>
            </div>

            <div className='m-auto'>
              <div className='col-auto'>
                <button onClick={createUser}>Sign up</button>
              </div>
            </div>

          </form>

        </div>

        <hr width={'75%'}/>

        <div className='or-log-in container'>
          <p>Already have an account?</p>
          <button onClick={sendToLoginPage}>Log In!</button>
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