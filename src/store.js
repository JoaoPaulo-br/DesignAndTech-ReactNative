import { createStore, combineReducers } from 'redux';
import colorReducer from './reducers/coloReducer';

const rootReducer = combineReducers({
  setting: colorReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;