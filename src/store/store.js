import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import settingsReducer from './reducers/settingsReducer';

const initialStore = {};

const rootReducer = combineReducers({
  settingsReducer,
});

export default createStore(rootReducer, initialStore, composeWithDevTools(applyMiddleware()));
