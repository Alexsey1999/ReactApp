export const setTodo = (payload) => ({
  type: 'SET_TODO',
  payload,
})

export const deleteTodo = (payload) => ({
  type: 'DELETE_TODO',
  payload,
})

export const editTodo = (payload) => ({
  type: 'EDIT_TODO',
  payload,
})
