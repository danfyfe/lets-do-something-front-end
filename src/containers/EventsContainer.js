import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { connect } from 'react-redux'
import API_ENDPOINT from '../ApiEndpoint.js'

import EventCard from '../components/cards/EventCard.js'
import AddEventForm from '../components/forms/AddEventForm.js'
import Search from '../containers/Search.js'
import NoContentMessageCard from '../components/cards/NoContentMessageCard.js'


// import '../css/Events.css';

class EventsContainer extends React.Component{
  state = {
    adding: false,
    searching: false,
    events: []
  }

  componentDidMount(){
    fetch(`${API_ENDPOINT}/users/${this.props.id}/events`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Accept: 'application/json',
        Authorization:  localStorage.getItem("token")
      }
    }).then(resp=>resp.json())
    .then( events => {
      this.setState({
        events
      })
    })
  }

  setAdding = () => {
    this.setState({
      adding: !this.state.adding
    })
  }

  setSearching = () => {
    this.setState({
      searching: !this.state.searching
    })
  }

  setEvents = event => {
    this.setState({
      events: [event,...this.state.events]
    })
  }

  renderEventCards = () => {
    return this.state.events.map( event => {
      return <EventCard key={event.id} event={event} history={this.props.history}/>
    })
  }

  render(){
    return(
      <div className='d-flex flex-column yellow-background med-padding'>
        <div className='d-flex flex-row justify-content-between'>
          <div className=''>
            <span>Events</span>
          </div>
          <div className='d-flex flex-row justify-content-between half-width'>
            <span className='m-auto'>Sort By</span>
            <FontAwesomeIcon className='m-auto' icon='plus' onClick={this.setAdding}/>
            <FontAwesomeIcon className='m-auto' icon='search' onClick={this.setSearching}/>
          </div>
      </div>

        {this.state.adding ? <AddEventForm setEvents={this.setEvents} cancelForm={this.setAdding}/> : null}

        {this.state.searching ? <Search searchType={'events'}/> : null}

        <div className='overflow-auto'>
          {this.state.events.length === 0 ? <NoContentMessageCard type={'events'}/> : this.renderEventCards()}
        </div>

        <div className='events container-bottom'>

        </div>

      </div>

    )
  }
}

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch({type:'SET_CURRENT_USER', user}),
    fetching: () => dispatch({type:'FETCHING'}),
    fetched: () => dispatch({type:'FETCHED'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EventsContainer)