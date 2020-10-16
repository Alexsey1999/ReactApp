import React from 'react'

import { Container, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

import { useSelector } from 'react-redux'

import AddTodoForm from './components/AddTodoForm'
import Navigation from './components/Navigation'
import TodoList from './components/TodoList'
import Characters from './components/Characters'
import ModalWindow from './components/ModalWindow'

import { Route } from 'react-router-dom'

function App() {
  const todos = useSelector(({ todosReducer }) => todosReducer.todos)
  const [isOpenModal, setIsOpenModal] = React.useState(false)

  const modal = isOpenModal ? (
    <ModalWindow>
      <div className="modal-window">
        <div className="modal-window-content">
          <Typography className="modal-title" variant="h6">
            This is my modal window
          </Typography>
          <Typography className="modal-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab est aut
            consequuntur tempora facere unde odit praesentium iste accusamus
            quasi.
          </Typography>
          <CloseIcon
            className="close-modal"
            onClick={() => setIsOpenModal(false)}
          />
        </div>
      </div>
    </ModalWindow>
  ) : (
    ''
  )

  function overlay_click(e) {
    if (!e.path.includes(document.querySelector('.modal-window'))) {
      setIsOpenModal(false)
    }
  }

  if (isOpenModal) {
    document.body.classList.add('modal-active')
    document.body.addEventListener('click', overlay_click)
  } else {
    document.body.classList.remove('modal-active')
    document.body.removeEventListener('click', overlay_click)
  }

  return (
    <div className="App">
      <Navigation setIsOpenModal={setIsOpenModal} />
      <Container maxWidth="md">
        <Route path="/" exact>
          <AddTodoForm />
          {!todos.length ? (
            <Typography variant="h4" gutterBottom className="no-tasks-title">
              Нет задач
            </Typography>
          ) : (
            <TodoList />
          )}
        </Route>
        <Route path="/characters/:pageId">
          <Characters />
        </Route>
      </Container>
      {modal}
    </div>
  )
}

export default App
