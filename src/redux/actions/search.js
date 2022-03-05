import axios from 'axios';

export const SEARCH_IMAGE = 'SEARCH_IMAGE';
export const SEARCH_MORE = 'SEARCH_MORE';
export const GET_IMAGE_SUCCESS = 'GET_IMAGE';
export const GET_MORE_SUCCESS = 'GET_MORE_SUCCESS';
export const LOADING_ON = 'LOADING_ON';
export const LOADING_OFF = 'LOADING_OFF';
export const LOAD_MORE_ON = 'LOAD_MORE_ON';
export const LOAD_MORE_OFF = 'LOAD_MORE_OFF';
export const IS_EMPTY = 'IS_EMPTY';

export function requestImages(query) {
	return {
		type: SEARCH_IMAGE,
		payload: {
			query,
		},
	};
}

export const fetchImages = async (query, page) => {
	const {
		data: { results },
	} = await axios.get(
		`https://api.unsplash.com/search/photos?query=${query}&client_id=ghX9dF3ZzX6RU-GeqPLM21U5sQgVcrR13Rk-OAzq2G4&page=${1}&per_page=30`
	);
	return results;
};

export function requestMore({ page, query }) {
	return {
		type: SEARCH_MORE,
		payload: {
			query,
			page,
		},
	};
}

export const fetchMore = async ({ query, page }) => {
	const {
		data: { results },
	} = await axios.get(
		`https://api.unsplash.com/search/photos?query=${query}&client_id=ghX9dF3ZzX6RU-GeqPLM21U5sQgVcrR13Rk-OAzq2G4&page=${page}&per_page=30`
	);
	return results;
};
