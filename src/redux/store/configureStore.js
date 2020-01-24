import { createStore, combineReducers } from 'redux'
import storeReducer from '../reducers/storeReducer'

const rootReducer = combineReducers(
  {
    store: storeReducer
  }
)

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore