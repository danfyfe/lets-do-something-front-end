import React, { useState } from 'react'
import { Redirect } from 'react-router'

import { connect } from 'react-redux'

// import API_ENDPOINT from '../ApiEndpoint.js'
import { logIn } from '../actions/userActions.js'

import ErrorMessage from '../status-messages/ErrorMessage.js'

const LoginPage = props => {

  // const axios = require('axios');

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

  return( localStorage.letsDoSomethingToken && localStorage.letsDoSomethingToken !== 'undefined' ? <Redirect to={'/home'}/> :
    <>
    <div className='main'>


      <div className='title container-fluid text-center'>
        <h2>Lets Do Something!</h2>
      </div>


      <div className='container d-flex m1-v'>
        <img className='logo m-auto' src='https://i.imgur.com/z0gkiOz.png' alt='logo of dance party'/>
      </div>


      <div className='container d-flex'>

      <div className='login container text-center'>
        <h4>LogIn!</h4>

        <div className='login-form container'>

          {props.state.errorMessage !== '' ? renderErrorMessage() : null}

          <form className='d-flex flex-column'>

            <div className='form-row m-auto'>
              <div className='col-auto'>
                <input
                  className='login-input'
                  type='text' placeholder='Username' onChange={e => setUsername(e.target.value)}/>
              </div>
            </div>

            <div className='form-row m-auto'>
              <div className='col-auto'>
                <input
                  className='login-input' type='password' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
              </div>
            </div>

            <div className='m-auto'>
              <div className='col-auto'>
                <button onClick={ e => logIn(e, username, password, props.setErrorMessage, props.history)}>Log in</button>
              </div>
            </div>

          </form>

        </div>

        <hr width={'75%'}/>

        <div className='login-signup container'>
          <p>No account?</p>
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