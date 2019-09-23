import API_ENDPOINT from '../ApiEndpoint.js'

const axios = require('axios');

export function getEvent( eventId, setCurrentEvent, fetched) {
  axios({
    method: 'GET',
    url: `${API_ENDPOINT}/events/${eventId}`,
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
  .then( resp => {
    setCurrentEvent(resp.data.event)
  }).then(fetched())
}


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