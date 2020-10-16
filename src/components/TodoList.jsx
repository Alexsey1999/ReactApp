import React from 'react'

import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, editTodo } from '../redux/actions/todos'

const TodoList = () => {
  const todos = useSelector(({ todosReducer }) => todosReducer.todos)
  const dispatch = useDispatch()

  const deleteTask = (todoId) => {
    const newTodoList = todos.filter((todo) => todo.id !== todoId)
    dispatch(deleteTodo(newTodoList))
  }

  const editTask = (todoItem) => {
    const newText = prompt('Редактировать задачу', todoItem.text)
    if (newText) {
      const newTodoList = todos.map((todo) => {
        if (todo.id === todoItem.id) {
          todo.text = newText
        }
        return todo
      })
      dispatch(editTodo(newTodoList))
    }
  }

  return (
    <React.Fragment>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={todo.id + index}>
            <ListItemText primary={todo.text} className="todo-list-item" />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => editTask(todo)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTask(todo.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  )
}

export default TodoList
