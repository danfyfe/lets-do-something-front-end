const defaultState = {
  currentUser: {},
  errorMessage: ''
}


function appReducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_ERROR_MESSAGE":

      return { ...state, errorMessage: action.errorMessage}
    case 'SET_CURRENT_USER':
      return { ...state, currentUser: action.user}
    default:
      return state
  }
}




export default appReducer