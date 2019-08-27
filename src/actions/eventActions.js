import API_ENDPOINT from '../ApiEndpoint.js'

export function getEvents(userId){
  // return(dispatch) => {
  fetch(`${API_ENDPOINT}/users/${userId}/events`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      Accept: 'application/json',
      Authorization:  localStorage.getItem("token")
    }
    // ,
    // body: JSON.stringify({
    //   user_id: userId
    // })
  }).then(resp=>resp.json())
  .then( events => {
    return events
  })
  // }
}



export function addEvent(eventObj, cancelForm){
  // console.log(cancelForm)
  fetch(`${API_ENDPOINT}/events`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: 'application/json',
      Authorization:  localStorage.getItem("token")
    },
    body: JSON.stringify({
      event: eventObj
    })
  }).then(resp=>resp.json())
  .then(event => {
    cancelForm()
    // console.log(event)
  })
}