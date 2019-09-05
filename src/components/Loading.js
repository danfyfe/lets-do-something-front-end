import React, { useState, useEffect } from 'react'

const Loading = props => {
  const [ array, setArray ] = useState([1])

  const loadingArray = [{id:1, letter:'L'}, {id:2, letter:'O'},{id:3, letter:'A'},{id:4, letter:'D'},{id:5, letter:'I'},{id:6, letter:'N'},{id:7, letter:'G'},{id:8, letter:'.'},{id:9, letter:'.'},{id:10, letter:'.'}]




  const span = letter => {
    return <span id={letter.id} key={letter.id}>{letter.letter}</span>
  }

  const renderLoadingArray = () => {
    return loadingArray.map(function(letter){
      return span(letter)
    })
  }


  return(
    <div className='loading'>

      <div id='div'>
        {renderLoadingArray()}
      </div>
    </div>
  )

}

export default Loading

// 'L','O','A','D','I','N','G','.','.','.','L','O','A','D','I','N','G','.','.','.','L','O','A','D','I','N','G','.','.','.'