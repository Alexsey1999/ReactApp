import React from 'react'

import { Button, makeStyles, TextField, Typography } from '@material-ui/core'

import { useDispatch } from 'react-redux'
import { setTodo } from '../redux/actions/todos'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: '15px 0',
    },
  },
  addTodoBtn: {
    marginTop: '0',
    marginBottom: '40px',
  },
}))

const AddTodoForm = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [todoInputText, setTodoInputText] = React.useState('')

  const addTodo = (e) => {
    if (e.key === 'Enter' || e.button === 0) {
      e.preventDefault()
      if (!todoInputText) {
        alert('Данное поле не должно быть пустым')
        return
      }
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        text: todoInputText,
      }
      dispatch(setTodo(newTodo))
      setTodoInputText('')
    }
  }

  return (
    <React.Fragment>
      <form className={classes.root} noValidate autoComplete="off">
        <Typography variant="h5" gutterBottom>
          Добавить задачу
        </Typography>

        <TextField
          fullWidth
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={todoInputText}
          onChange={(e) => setTodoInputText(e.target.value)}
          onKeyPress={(e) => addTodo(e)}
        />
        <Button
          className={classes.addTodoBtn}
          size="large"
          variant="contained"
          color="primary"
          onClick={(e) => addTodo(e)}
        >
          Добавить
        </Button>
      </form>
    </React.Fragment>
  )
}

export default React.memo(AddTodoForm)
