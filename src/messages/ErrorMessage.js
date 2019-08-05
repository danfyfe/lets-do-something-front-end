import React from 'react'

import '../css/Messages.css'

const ErrorMessage = props => {
  return(
    <>
      <div className='error-message-container'>
        <h5>{props.errorMessage}</h5>
      </div>
    </>
  )
}

export default ErrorMessage