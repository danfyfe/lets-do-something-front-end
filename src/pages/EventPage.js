import React from 'react'

import API_ENDPOINT from '../ApiEndpoint.js'


class EventPage extends React.Component {

  state = {

  }

  componentDidMount(){
    fetch(`${API_ENDPOINT}/events/${this.props.match.params.id}`, {
      method: 'GET',
      headers: {
        Authorization:  localStorage.getItem("token")
      }
    }).then(resp=>resp.json())
    .then( event => {
      console.log(event)
    })
  }

  render(){
    return(
      <div>
        Hi from event page
      </div>
    )
  }
}

export default EventPage