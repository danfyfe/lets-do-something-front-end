import React from 'react'
import { connect } from 'react-redux'

import API_ENDPOINT from '../ApiEndpoint.js'


class EventPage extends React.Component {

  state = {
    event: {}
  }

  componentDidMount(){
    fetch(`${API_ENDPOINT}/profile`, {
      method: 'POST',
      headers: {
        Authorization:  localStorage.getItem("token")
      }
    }).then(resp => resp.json())
    .then(user => {
      this.props.setCurrentUser(user.user)
    }).then(
      fetch(`${API_ENDPOINT}/events/${this.props.match.params.id}`, {
        method: 'GET',
        headers: {
          Authorization:  localStorage.getItem("token")
        }
      }).then(resp=>resp.json())
      .then( event => {
        this.setState({
          event
        })
      }).then(this.props.fetched())
    )
  }

  render(){
    console.log(this.state.event)
    return(<>
      { }
      <div>
        Hi from event page
      </div>
    </>)
  }
}

const mapStateToProps = state => {
  return {
    state
   }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch({type:'SET_CURRENT_USER', user}),
    fetching: () => dispatch({type:'FETCHING'}),
    fetched: () => dispatch({type:'FETCHED'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EventPage)