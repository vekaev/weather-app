import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export function configureStore(initialState, rootReducer, version) {
  if (typeof initialState !== 'object') {
    throw new Error(
      'Unexpected type for first argument - initialState. Initial state should be an object.',
    );
  }

  if (typeof rootReducer !== 'function') {
    throw new Error(
      'Unexpected type for second argument - rootReducer. Root reducer should be a function.',
    );
  }

  if (typeof version !== 'number') {
    throw new Error(
      'Unexpected type for third argument - version. Version should be a number.',
    );
  }

  const middlewares = [];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(require('redux-immutable-state-invariant').default());
  }

  middlewares.push(thunk);

  if (process.env.NODE_ENV === 'development') {
    return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middlewares)),
    );
  }

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares)),
  );
}
