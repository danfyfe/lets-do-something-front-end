const defaultState = {
  currentUser: {},
  errorMessage: ''
}


function eventsReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_EVENT":
    
      return { ...state }

    default:
      return state
  }
}




export default eventsReducer