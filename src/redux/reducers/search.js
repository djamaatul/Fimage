import {
	GET_IMAGE_SUCCESS,
	GET_MORE_SUCCESS,
	LOADING_ON,
	LOADING_OFF,
	LOAD_MORE_ON,
	LOAD_MORE_OFF,
	IS_EMPTY,
} from '../actions/search';

const initialState = {
	loading: false,
	loadmore: false,
	isEmpty: false,
	images: [],
	page: 1,
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case LOADING_ON:
			return { ...state, loadmore: true };
		case LOADING_OFF:
			return { ...state, loading: false, loadmore: false };
		case LOAD_MORE_ON:
			return { ...state, loadmore: true };
		case LOAD_MORE_OFF:
			return { ...state, loadmore: false };
		case GET_IMAGE_SUCCESS:
			return { ...state, images: payload.data, page: 2, isEmpty: false };
		case GET_MORE_SUCCESS:
			return { ...state, images: [...state.images, ...payload.data], page: state.page + 1 };
		case IS_EMPTY:
			return { ...state, isEmpty: true };
		default:
			return state;
	}
};
export default reducer;
