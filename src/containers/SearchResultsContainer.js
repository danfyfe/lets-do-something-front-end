import React from 'react'

import EventCard from '../components/cards/EventCard.js'

const SearchResultsContainer = props => {

  // const renderEventCards = () => {
  //   return this.state.events.map( event => {
  //     return <EventCard key={event.id} event={event} history={this.props.history}/>
  //   })
  // }


  const filteredResults = searchType => {
    
    let results

    if (searchType === 'users') {
      results = 'asdf'
    } else if (searchType === 'events') {

    }
  }

  console.log('search results cont props', props)
  return(
    <div className='d-flex flex-column white-background'>
      {}


    </div>
  )
}

export default SearchResultsContainer