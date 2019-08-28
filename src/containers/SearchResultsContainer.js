import React from 'react'

import EventCard from '../components/cards/EventCard.js'
const SearchResultsContainer = props => {

  const renderEventCards = () => {
    return this.state.events.map( event => {
      return <EventCard key={event.id} event={event} history={this.props.history}/>
    })
  }

  return(
    <div className='d-flex flex-column white-background'>



    </div>
  )
}

export default SearchResultsContainer