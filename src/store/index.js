import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import memberReducer from './member/member.reducer'

const reducers = combineReducers({
  member: memberReducer
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

export default store