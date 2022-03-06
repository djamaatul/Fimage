import {
	GET_IMAGE_SUCCESS,
	GET_MORE_SUCCESS,
	GET_FAVORITE_SUCCESS,
	LOADING_ON,
	LOADING_OFF,
	LOAD_MORE_ON,
	LOAD_MORE_OFF,
	IS_EMPTY,
	IS_END,
	REFRESH_FAVORITE_SUCCESS,
} from '../actions/search';

const initialState = {
	loading: false,
	loadmore: false,
	isEmpty: false,
	isEnd: false,
	images: [],
	favoriteImages: [],
	page: 1,
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case LOADING_ON:
			return { ...state, loading: true };
		case LOADING_OFF:
			return { ...state, loading: false };
		case LOAD_MORE_ON:
			return { ...state, loadmore: true };
		case LOAD_MORE_OFF:
			return { ...state, loadmore: false };
		case GET_IMAGE_SUCCESS:
			return { ...state, images: payload.data, page: 2, isEmpty: false, isEnd: false };
		case GET_MORE_SUCCESS:
			return { ...state, images: [...state.images, ...payload.data], page: state.page + 1 };
		case GET_FAVORITE_SUCCESS:
			return { ...state, favoriteImages: [...state.favoriteImages, payload.data] };
		case REFRESH_FAVORITE_SUCCESS:
			return { ...state, favoriteImages: payload.data };
		case IS_EMPTY:
			return { ...state, images: [], isEmpty: true };
		case IS_END:
			return { ...state, isEnd: true };
		default:
			return state;
	}
};
export default reducer;
