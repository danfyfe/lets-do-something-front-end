import React from 'react'
import '../css/LoginPage.css';



const LoginPage = (props) => {
  const sendToSignUpPage = () => {
    props.history.push('/signup')
  }
  return(
    <>
    <div className='main'>
      <div className='title-container'>
      <h1>Lets Do Something!</h1>
      </div>
      <div className='login-container'>
        <div className='login-form-container'>

          <h3>LogIn!</h3>

          <form className='login-form'>
            <label>Username</label>
            <input className='login-input' type='text' placeholder='  Username'/>
            <label>Password</label>
            <input className='login-input' type='password' placeholder='  Password'/>
            <button>Submit</button>
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

export default LoginPage