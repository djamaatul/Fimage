import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSaga from 'redux-saga';
import search from './reducers/search';
import sagas from './sagas';
import { REQUEST_FAVORITE } from './actions/search';

const saga = createSaga();
const store = createStore(combineReducers({ search }), applyMiddleware(saga));

saga.run(sagas);

store.dispatch({ type: REQUEST_FAVORITE });
export default store;
