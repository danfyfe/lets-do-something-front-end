import API_ENDPOINT from '../ApiEndpoint.js'

const axios = require('axios');

export function logIn(e, username, password, setErrorMessage, history) {
  e.preventDefault()
  axios({
    method: 'POST',
    url: `${API_ENDPOINT}/login`,
    headers: {
      "Content-Type": "application/json",
      Authorization:  localStorage.getItem("token")
    },
    data: {
      user: { username, password }
    }
  })
  .then( resp => {
    if (resp.data.error) {
      setErrorMessage(resp.data.error)
    }
    localStorage.setItem('token', resp.data.jwt)
    if (localStorage.token !== 'undefined') {
      history.push('/home')
    }
  })
}
