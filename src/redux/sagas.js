import { takeLatest, put, call } from 'redux-saga/effects';
import {
	SEARCH_IMAGE,
	GET_IMAGE_SUCCESS,
	LOADING_ON,
	LOADING_OFF,
	SEARCH_MORE,
	GET_MORE_SUCCESS,
	LOAD_MORE_OFF,
	LOAD_MORE_ON,
	fetchImages,
	fetchMore,
	IS_EMPTY,
} from './actions/search';

export function* searchWorker({ payload }) {
	try {
		yield put({ type: LOADING_ON });
		const data = yield call(fetchImages, payload.query);
		if (data.length !== 0) {
			yield put({ type: GET_IMAGE_SUCCESS, payload: { data } });
		} else {
			yield put({ type: IS_EMPTY });
		}
		yield put({ type: LOADING_OFF });
	} catch (error) {
		yield put({ type: LOADING_OFF });
	}
}

export function* searchMoreWorker({ payload }) {
	try {
		yield put({ type: LOAD_MORE_ON });
		const data = yield call(fetchMore, { query: payload.query, page: payload.page });
		if (data.length !== 0) {
			yield put({ type: GET_MORE_SUCCESS, payload: { data, page: payload.page } });
		} else {
			yield put({ type: IS_EMPTY });
		}
		yield put({ type: LOAD_MORE_OFF });
	} catch (error) {
		// console.log(error.message);
		yield put({ type: LOAD_MORE_OFF });
	}
}

export default function* sagas() {
	yield takeLatest(SEARCH_IMAGE, searchWorker);
	yield takeLatest(SEARCH_MORE, searchMoreWorker);
}
