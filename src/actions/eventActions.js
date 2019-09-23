import API_ENDPOINT from '../ApiEndpoint.js'

const axios = require('axios');

// export function getEvents(userId){
//   return(dispatch) => {
//   fetch(`${API_ENDPOINT}/users/${userId}/events`, {
//     method: 'GET',
//     headers: {
//       "Content-Type": "application/json",
//       Accept: 'application/json',
//       Authorization:  localStorage.getItem("token")
//     }
//   }).then(resp=>resp.json())
//   .then( events => {
//     return events
//   })
//   }
// }



export function addEvent(eventObj, cancelForm, setEvents){
  axios({
    method: 'POST',
    url: `${API_ENDPOINT}/events`,
    headers: {
      "Content-Type": "application/json",
      Accept: 'application/json',
      Authorization:  localStorage.getItem("token")
    },
    data: {
      event: eventObj
    }
  })
  .then(resp => {
    setEvents(resp.data)
    cancelForm()
  })
}

export function editEvent(){

}