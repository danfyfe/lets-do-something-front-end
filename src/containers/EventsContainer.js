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
    origPos: 0
    // events: []
  }

  componentDidMount(){
    fetch(`${API_ENDPOINT}/users/${this.props.currentUserId}/events`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Accept: 'application/json',
        Authorization:  localStorage.getItem("token")
      }
    }).then(resp=>resp.json())
    .then( events => {
      // this.setState({
      //   events
      // })
      this.props.setEvents(events)

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
    // this.setState({
    //   events: [event,...this.state.events]
    // })
    this.props.setEvents([...this.props.events, event])
  }

  renderEventCards = () => {
    return this.props.events.map( event => {
      return <EventCard key={event.id} event={event} history={this.props.history}/>
    })
  }

  addEventFromInvite = event => {
    this.setState({
      events: [...this.state.events, event]
    })
  }

  render(){
    return(<>
      <div id='event-container' className='d-flex flex-column yellow-background med-padding'>
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

        {this.state.searching ? <Search history={this.props.history} searchType={'events'}/> : null}

        <div className=''>
          {this.props.events.length === 0 ? <NoContentMessageCard type={'events'}/> : this.renderEventCards()}
        </div>

        <div className='events container-bottom'>

        </div>

      </div>

    </>)
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
   }
}

const mapDispatchToProps = dispatch => {
  return {
    setEvents: events => dispatch({type:'SET_EVENTS', events}),
    fetching: () => dispatch({type:'FETCHING'}),
    fetched: () => dispatch({type:'FETCHED'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EventsContainer)