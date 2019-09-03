import React from 'react'

import EventCard from '../components/cards/EventCard.js'
import UserCard from '../components/cards/UserCard.js'

const SearchResultsContainer = props => {

  // const renderEventCards = () => {
  //   return this.state.events.map( event => {
  //     return <EventCard key={event.id} event={event} history={this.props.history}/>
  //   })
  // }
  const filteredResults = searchType => {
    let newResults
    if (searchType === 'users') {
      newResults = props.results.filter( user => user.username.toLowerCase().includes(props.searchTerm))
    } else if (searchType === 'events') {
      newResults = props.results.filter( event => event.title.toLowerCase().includes(props.searchTerm))
    }
    return newResults
  }

  const renderResultsCards = searchType => {
    let newResults = filteredResults(props.searchType)
    if (searchType === 'users') {
      return newResults.map( user => {
        return <UserCard key={user.id} user={user}/>
      })
    } else if (searchType === 'events') {
      return newResults.map( event => {
        return <EventCard key={event.id} event={event}/>
      })
    }
  }

  // console.log('search results cont', props.searchTerm)
  // console.log(filteredResults(props.searchType))

  return(
    <div className='d-flex flex-column white-background'>
      {renderResultsCards(props.searchType)}


    </div>
  )
}

export default SearchResultsContainer