import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SEARCH_IMAGE = 'SEARCH_IMAGE';
export const SEARCH_MORE = 'SEARCH_MORE';
export const GET_IMAGE_SUCCESS = 'GET_IMAGE';
export const GET_MORE_SUCCESS = 'GET_MORE_SUCCESS';
export const LOADING_ON = 'LOADING_ON';
export const LOADING_OFF = 'LOADING_OFF';
export const LOAD_MORE_ON = 'LOAD_MORE_ON';
export const LOAD_MORE_OFF = 'LOAD_MORE_OFF';
export const IS_EMPTY = 'IS_EMPTY';
export const IS_END = 'IS_END';
export const REQUEST_FAVORITE = 'REQUEST_FAVORITE';
export const GET_FAVORITE_SUCCESS = 'GET_FAVORITE_SUCCESS';
export const ADD_FAVORITE = 'ADD_FAVORITE';

export function requestImages(query) {
	return {
		type: SEARCH_IMAGE,
		payload: {
			query,
		},
	};
}

export const fetchImages = async (query, page) => {
	if (query !== '') {
		const {
			data: { results },
		} = await axios.get(
			`https://api.unsplash.com/search/photos?query=${query}&client_id=ghX9dF3ZzX6RU-GeqPLM21U5sQgVcrR13Rk-OAzq2G4&page=${page}&per_page=30`
		);
		return results;
	} else {
		const { data } = await axios.get(
			`https://api.unsplash.com/photos/random?client_id=ghX9dF3ZzX6RU-GeqPLM21U5sQgVcrR13Rk-OAzq2G4&count=30&page=${page}`
		);
		return data;
	}
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
	if (query !== '') {
		const {
			data: { results },
		} = await axios.get(
			`https://api.unsplash.com/search/photos?query=${query}&client_id=ghX9dF3ZzX6RU-GeqPLM21U5sQgVcrR13Rk-OAzq2G4&page=${page}&per_page=30`
		);
		return results;
	} else {
		const { data } = await axios.get(
			`https://api.unsplash.com/photos/random?client_id=ghX9dF3ZzX6RU-GeqPLM21U5sQgVcrR13Rk-OAzq2G4&count=30&page=${page}`
		);
		return data;
	}
};

export const fetchingFavorite = async () => {
	const data = await AsyncStorage.getItem('@favoriteImages');
	if (!data) {
		AsyncStorage.setItem('@favoriteImages', '[]');
	}
	return JSON.parse(data);
};

export const addFavorite = async (data) => {
	AsyncStorage.getItem('@favoriteImages', (err, result) => {
		let parsedResult = JSON.parse(result);
		console.log(parsedResult);
		AsyncStorage.setItem('@favoriteImages', JSON.stringify([...parsedResult, data]));
	});
	return data;
};
