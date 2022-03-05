import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { requestImages } from '../redux/actions/search';

const SearchHeader = ({ navigation }) => {
	const [query, setQuery] = useState('');
	const dispatch = useDispatch();

	const handleSearch = () => {
		navigation.replace('Search', { query });
		dispatch(requestImages(query));
	};
	return (
		<View style={{ backgroundColor: 'red', height: 80 }}>
			<View style={{ flexDirection: 'row', marginTop: 28, flex: 1, alignItems: 'center', padding: 10 }}>
				<TouchableOpacity style={{ marginRight: 10 }} activeOpacity={0.6}>
					<Ionicons name='ios-arrow-back' size={24} color='white' onPress={() => navigation.goBack()} />
				</TouchableOpacity>
				<View style={{ backgroundColor: 'rgba(255,255,255,0.3)', flex: 1, borderRadius: 10 }}>
					<TextInput
						placeholder='Search'
						placeholderTextColor='white'
						style={{ flex: 1, paddingLeft: 10, color: 'white' }}
						onChangeText={(text) => setQuery(text)}
					/>
				</View>
				<TouchableOpacity style={{ marginLeft: 10 }} activeOpacity={0.6} onPress={handleSearch}>
					<Ionicons name='ios-search' size={24} color='white' />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default SearchHeader;
