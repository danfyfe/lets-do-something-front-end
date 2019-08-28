import React, { useState } from 'react'

import SearchResultsContainer from './SearchResultsContainer.js'

const SearchBar = props => {

  const [ searchTerm, setSearchTerm ] = useState('')

  return(
    <div className='d-flex flex-column most-width m-auto'>

      <div className='d-flex med-padding'>
          <input className=''type='text' placeholder='Enter Event Title to Search...' onChange={e => setSearchTerm(e.target.value)}/>
      </div>

      <div className='d-flex med-padding'>
        <SearchResultsContainer searchTerm={searchTerm}/>
      </div>



    </div>
  )

}

export default SearchBar