import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import postsBySubreddit from './postsBySubreddit'
import selectedSubreddit from './selectedSubreddit'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  postsBySubreddit,
  selectedSubreddit
})

export default todoApp
