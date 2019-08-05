import React from 'react'
import '../css/LoginPage.css';



const LoginPage = () => {
  return(
    <>
    <div className='main'>
      <div className='login-container'>
        <div className='title-container'>
          <h1>Lets Do Something!</h1>
        </div>
        <div className='login-form-container'>
          <form className='login-form'>
            <input className='login-input' type='text' placeholder='  Username'/>
            <input className='login-input' type='password' placeholder='  Password'/>
          </form>
          <hr width={'75%'}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default LoginPage