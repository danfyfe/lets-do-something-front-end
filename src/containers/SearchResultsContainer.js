import React from 'react'

import EventCard from '../components/cards/EventCard.js'
import UserCard from '../components/cards/UserCard.js'

const SearchResultsContainer = props => {
  const { searchTerm, searchType } = props

  const filteredResults = searchType => {
    let newResults
    if (searchType === 'users') {
      newResults = props.results.filter( user => user.username.toLowerCase().includes(searchTerm))
    } else if (searchType === 'events') {
      newResults = props.results.filter( event => event.title.toLowerCase().includes(searchTerm))
    }
    return newResults
  }

  const renderResultsCards = searchType => {
    let newResults = filteredResults(searchType)
    if (searchType === 'users' && searchTerm !== '') {
      return newResults.map( user => {
        return <UserCard key={user.id} user={user}/>
      })
    } else if (searchType === 'events' && searchTerm !== '') {
      return newResults.map( event => {
        return <EventCard history={props.history}
        key={event.id} event={event}/>
      })
    }
  }

  return(
    <div className='d-flex flex-column yellow-background full-width'>
      {renderResultsCards(searchType)}
    </div>
  )
}

export default SearchResultsContainer