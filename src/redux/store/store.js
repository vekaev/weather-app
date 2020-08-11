import { createStore, applyMiddleware } from 'redux';
import { filterReducer } from '../reducers/reducer';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  filterReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

export default store;
