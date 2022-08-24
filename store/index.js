// Importe o método applyMiddleware
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
// Importe o redux-thunk

// Aplique o middleware
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;
