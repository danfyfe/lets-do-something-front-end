import React from 'react'
import '../css/SignUp.css';



const SignupPage = props => {
  const sendToLoginPage = () => {
    props.history.push('/')
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
            <input className='signup-input' type='text' placeholder='  Username'/>
            <label>Password</label>
            <input className='signup-input' type='password' placeholder='  Password'/>
            <label>Confirm Password</label>
            <input className='signup-input' type='password' placeholder='  Confirm Password'/>
            <div className='signup-button-container'>
              <button>Submit</button>
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