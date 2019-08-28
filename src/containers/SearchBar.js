import React, { useState } from 'react'

import SearchResultsContainer from './SearchResultsContainer.js'

const SearchBar = props => {

  const [ searchTerm, setSearchTerm ] = useState('')

  return(
    <div className='d-flex flex-column most-width m-auto'>

      <div className='d-flex'>
          <input className=''type='text' placeholder='Search Events...' onChange={e => setSearchTerm(e.target.value)}/>
      </div>

      <div className='d-flex'>
        <SearchResultsContainer searchTerm={searchTerm}/>
      </div>



    </div>
  )

}

export default SearchBar