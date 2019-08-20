import API_ENDPOINT from '../ApiEndpoint.js'


export function getEvents(userId){

}


export function addEvent(eventObj){
  console.log(eventObj)
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
    console.log(event)
  })
}