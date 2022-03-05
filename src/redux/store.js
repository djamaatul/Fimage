import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSaga from 'redux-saga';
import search from './reducers/search';
import sagas from './sagas';

const saga = createSaga();
const store = createStore(combineReducers({ search }), applyMiddleware(saga));

saga.run(sagas);
export default store;
