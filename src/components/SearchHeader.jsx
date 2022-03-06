import { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useDispatch } from 'react-redux';
import { requestImages } from '../redux/actions/search';
import { useTailwind } from 'tailwind-rn/dist';

import { dp } from '../utils/units';

const SearchHeader = ({ navigation }) => {
	const [query, setQuery] = useState('');
	const dispatch = useDispatch();
	const tailwind = useTailwind();

	const handleSearch = () => {
		navigation.replace('Search', { query });
		dispatch(requestImages(query));
	};

	const styles = {
		container: { ...tailwind('bg-rose-500 h-20') },
		subContainer: tailwind('flex-1 flex-row items-center p-2 mt-6'),
		backButton: tailwind('mr-2'),
		searchButton: tailwind('ml-2'),
		inputContainer: tailwind('flex-1 rounded-lg bg-white/20'),
		input: tailwind('flex-1 p-2 text-white'),
	};

	return (
		<View style={styles.container}>
			<View style={styles.subContainer}>
				<TouchableOpacity style={styles.backButton}>
					<Ionicons name='ios-arrow-back' size={dp(10)} color='white' onPress={() => navigation.goBack()} />
				</TouchableOpacity>
				<View style={styles.inputContainer}>
					<TextInput
						placeholder='Search'
						placeholderTextColor='white'
						style={styles.input}
						onChangeText={(text) => setQuery(text)}
					/>
				</View>
				<TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
					<Ionicons name='ios-search' size={dp(10)} color='white' />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default SearchHeader;
