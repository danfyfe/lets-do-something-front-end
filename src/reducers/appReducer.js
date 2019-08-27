const defaultState = {
  currentUser: {},
  errorMessage: '',
  fetching: false,
  fetched: false
}


function appReducer(state = defaultState, action) {
  switch (action.type) {
    case 'SET_ERROR_MESSAGE':

      return { ...state, errorMessage: action.errorMessage}

    case 'FETCHING':

      return {...state, fetching: true}

    case 'FETCHED':

      return {...state, fetching: false, fetched: true}

    case 'SET_CURRENT_USER':
      return { ...state, currentUser: action.user}


    case 'GET_EVENTS':
    console.log('inside get events')
      return state


    default:
      return state
  }
}




export default appReducer