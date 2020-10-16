const initialState = {
  todos: [
    {
      id: 1,
      text: 'Сделать что-нибудь',
    },
    {
      id: 2,
      text: 'Купить фруктов',
    },
    {
      id: 3,
      text: 'Сходить пройтись',
    },
  ],
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: action.payload,
      }
    case 'EDIT_TODO':
      return {
        ...state,
        todos: action.payload,
      }
    default:
      return state
  }
}

export default todosReducer
