const initialState = {
  people: [],
  isLoading: false,
}

const swapiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PEOPLE':
      return {
        ...state,
        people: action.payload,
      }
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state
  }
}

export default swapiReducer
