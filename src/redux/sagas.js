import { takeLatest, put, call } from 'redux-saga/effects';
import {
	SEARCH_IMAGE,
	SEARCH_MORE,
	GET_IMAGE_SUCCESS,
	GET_MORE_SUCCESS,
	GET_FAVORITE_SUCCESS,
	LOADING_ON,
	LOADING_OFF,
	LOAD_MORE_OFF,
	LOAD_MORE_ON,
	fetchImages,
	fetchMore,
	fetchingFavorite,
	addFavorite,
	IS_EMPTY,
	IS_END,
	REQUEST_FAVORITE,
	ADD_FAVORITE,
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
			yield put({ type: IS_END });
		}
		yield put({ type: LOAD_MORE_OFF });
	} catch (error) {
		yield put({ type: LOAD_MORE_OFF });
	}
}

export function* searchFavoriteWorker() {
	try {
		const data = yield call(fetchingFavorite);
		yield put({ type: GET_FAVORITE_SUCCESS, payload: { data } });
	} catch (error) {
		console.log(error.message);
	}
}
export function* addFavoriteWorker({ payload }) {
	try {
		const data = yield call(addFavorite, payload);
		yield put({ type: GET_FAVORITE_SUCCESS, payload: { data } });
	} catch (error) {
		console.log(error.message);
	}
}
export default function* sagas() {
	yield takeLatest(SEARCH_IMAGE, searchWorker);
	yield takeLatest(SEARCH_MORE, searchMoreWorker);
	yield takeLatest(REQUEST_FAVORITE, searchFavoriteWorker);
	yield takeLatest(ADD_FAVORITE, addFavoriteWorker);
}
