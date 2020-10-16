import { combineReducers } from 'redux'
import todosReducer from '../reducers/todos'
import swapiReducer from '../reducers/swapi'

const rootReducer = combineReducers({ todosReducer, swapiReducer })

export default rootReducer
