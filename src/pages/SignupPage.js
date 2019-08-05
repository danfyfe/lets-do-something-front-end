import React, { useState } from 'react'
import '../css/SignUp.css';
import API_ENDPOINT from '../ApiEndpoint.js'


const SignupPage = props => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')


  const sendToLoginPage = () => {
    props.history.push('/')
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
          username, password, passwordConfirm
        }
      })
    }).then(resp=>resp.json())
      .then(data => {
        console.log(data)
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

          <form className='signup-form'>
            <label>Username</label>
            <input className='signup-input' type='text' placeholder='  Username' onChange={e => setUsername(e.target.value.toLowerCase())}/>
            <label>Password</label>
            <input className='signup-input' type='password' placeholder='  Password' onChange={e => setPassword(e.target.value)}/>
            <label>Confirm Password</label>
            <input className='signup-input' type='password' placeholder='  Confirm Password' onChange={e => setPasswordConfirm(e.target.value)}/>
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

export default SignupPage