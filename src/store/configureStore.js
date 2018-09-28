import { createStore, combineReducers } from 'redux';
import mainReducer from './reducers/main';


const rootReducer = combineReducers({
  main: mainReducer
})

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore;
