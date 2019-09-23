import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import SearchResultsContainer from './SearchResultsContainer.js'
import Loading from '../components/Loading.js'

import API_ENDPOINT from '../ApiEndpoint.js'

const Search = props => {

  const axios = require('axios');

  const [ searchTerm, setSearchTerm ] = useState('')
  const [ results, setResults ] = useState(false)

  useEffect(() => {
    axios({
      method: 'GET',
      url:`${API_ENDPOINT}/search/${props.searchType}/${props.state.currentUser.id}`,
      headers: {
        Authorization:  localStorage.getItem("token")
      }
    })
    .then( resp => {
      setResults(resp.data)
    })

  },[props.searchType, props.state.currentUser.id, axios])


  return(<>
    {props.state.fetched && props.state.currentUser.id && results ?

      <div className='d-flex flex-column most-width m-auto'>

        <div className='d-flex med-padding'>
          <input className=''type='text' placeholder='Start typing to search...' onChange={e => setSearchTerm(e.target.value)}/>
        </div>

        <div className='d-flex med-padding'>
          <SearchResultsContainer
            history={props.history}
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