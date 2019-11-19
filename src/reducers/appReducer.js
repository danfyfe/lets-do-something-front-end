const defaultState = {
  currentUser: {},
  currentEvent: {},
  events: [],
  messages: [],
  errorMessage: '',
  fetching: false,
  fetched: false
}


function appReducer(state = defaultState, action) {
  switch (action.type) {
    case 'SET_MESSAGES':

    return { ...state, messages:action.messages }

    case 'SET_EVENTS':

      console.log('inside set events', action.events)
      return { ...state, events: action.events}
    case 'SET_ERROR_MESSAGE':

      return { ...state, errorMessage: action.errorMessage}

    case 'FETCHING':

      return {...state, fetching: true}

    case 'FETCHED':

      return {...state, fetching: false, fetched: true}

    case 'SET_CURRENT_USER':
      return { ...state, currentUser: action.user}


    case 'SET_CURRENT_EVENT':
      return { ...state, currentEvent: action.event}

    default:
      return state
  }
}




export default appReducer