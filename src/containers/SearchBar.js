import React, { useState, useEffect } from 'react'

import SearchResultsContainer from './SearchResultsContainer.js'

import API_ENDPOINT from '../ApiEndpoint.js'

const SearchBar = props => {



  const [ searchTerm, setSearchTerm ] = useState('')
  // const [ searchType, setSearchType ] = useState('')
  const [ users, setUsers ] = useState([])

  useEffect(() => {
    // setSearchType(props.searchType)
    fetch(`${API_ENDPOINT}/${props.searchType}`, {
      method: 'GET',
      headers: {
        Authorization:  localStorage.getItem("token")
      }
    }).then(resp=>resp.json())
    .then( users => {
      console.log('users', users)
    })

  },[props.searchType ])

  // console.log()
  return(
    <div className='d-flex flex-column most-width m-auto'>

      <div className='d-flex med-padding'>
          <input className=''type='text' placeholder='Start typing to search...' onChange={e => setSearchTerm(e.target.value)}/>
      </div>

      <div className='d-flex med-padding'>
        <SearchResultsContainer searchTerm={searchTerm}/>
      </div>



    </div>
  )

}

export default SearchBar