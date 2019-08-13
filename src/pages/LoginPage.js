import React, { useState } from 'react'
import { Redirect } from 'react-router'

import { connect } from 'react-redux'

import '../css/LoginPage.css';
import '../css/Messages.css'
import API_ENDPOINT from '../ApiEndpoint.js'

import ErrorMessage from '../status-messages/ErrorMessage.js'



const LoginPage = (props) => {

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')



  const sendToSignUpPage = () => {
    props.history.push('/signup')
  }

  const renderErrorMessage = () => {
    return <>
      <ErrorMessage errorMessage={props.state.errorMessage}/>
    </>
  }

  const logIn = (e) => {
    e.preventDefault()
    fetch(`${API_ENDPOINT}/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization:  localStorage.getItem("token")
      },
      body: JSON.stringify({
        user: { username, password }
      })
    }).then(resp=>resp.json())
    .then( data => {
      if (data.error) {
        props.setErrorMessage(data.error)
      }
      localStorage.setItem('token', data.jwt)
      if (localStorage.token !== 'undefined') {
        props.history.push('/home')
      }
    })
  }


  return( localStorage.token && localStorage.token !== 'undefined' ? <Redirect to={'/home'}/> :
    <>
    <div className='main'>
      <div className='title-container'>
      <h1>Lets Do Something!</h1>
      </div>
      <div className='login-container'>
        <div className='login-form-container'>

          <h3>LogIn!</h3>
          {props.state.errorMessage !== '' ? renderErrorMessage() : null}
          <form className='login-form'>
            <label>Username</label>
            <input className='login-input' type='text' placeholder='Username' onChange={e => setUsername(e.target.value)}/>
            <label>Password</label>
            <input className='login-input' type='password' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
            <button onClick={logIn}>Submit</button>
          </form>

          <hr width={'75%'}/>

          <div className='login-signup-container'>
            <h4>or</h4>
            <button onClick={sendToSignUpPage}>SignUp!</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)