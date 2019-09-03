import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import SearchResultsContainer from './SearchResultsContainer.js'
import Loading from '../components/Loading.js'

import API_ENDPOINT from '../ApiEndpoint.js'

const Search = props => {

  const [ searchTerm, setSearchTerm ] = useState('m')
  const [ results, setResults ] = useState(false)

  useEffect(() => {
    fetch(`${API_ENDPOINT}/${props.searchType}`, {
      method: 'GET',
      headers: {
        Authorization:  localStorage.getItem("token")
      }
    }).then(resp=>resp.json())
    .then( results => {
      setResults(results)
    })

  },[props.searchType])

  return(<>
    {props.state.fetched && props.state.currentUser.id && results ?

      <div className='d-flex flex-column most-width m-auto'>

        <div className='d-flex med-padding'>
          <input className=''type='text' placeholder='Start typing to search...' onChange={e => setSearchTerm(e.target.value)}/>
        </div>

        <div className='d-flex med-padding'>
          <SearchResultsContainer
            searchTerm={searchTerm}
            searchType={props.searchType}
            results={results}/>
        </div>


      </div> : <Loading/>

    }

  </>)

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
    fetched: () => dispatch({type:'FETCHED'}),
    setCurrentEvent: event => dispatch({type:'SET_CURRENT_EVENT', event})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)