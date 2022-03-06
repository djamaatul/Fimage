import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { dp, vw } from '../utils/units';

import { useDispatch } from 'react-redux';
import { requestImages } from '../redux/actions/search';

import { useTailwind } from 'tailwind-rn';

import LoadingScreen from '../components/LoadingScreen';

const Home = ({ navigation }) => {
	const [query, setQuery] = useState('');
	const dispatch = useDispatch();
	const tailwind = useTailwind();

	const handleSearch = () => {
		dispatch(requestImages(query));
		navigation.navigate('Search', { query });
	};

	const styles = {
		container: tailwind('flex-1 justify-center items-center'),
		bannerContainer: tailwind('flex-row justify-center items-center'),
		bannerFirst: { ...tailwind('text-rose-500 font-bold'), fontSize: vw(12) },
		bannerSecond: { ...tailwind('text-blue-400 font-bold'), fontSize: vw(12) },
		searchContainer: { ...tailwind('flex-row  items-center bg-white mt-5  px-4 py-2 rounded-lg '), width: vw(70) },
		searchInput: tailwind('flex-1 text-gray-500'),
	};

	return (
		<View style={styles.container}>
			<SafeAreaView>
				<LoadingScreen />
				<View style={styles.bannerContainer}>
					<Text style={styles.bannerFirst}>F</Text>
					<Text style={styles.bannerSecond}>Image</Text>
				</View>
				<View style={styles.searchContainer}>
					<TextInput
						placeholder='Search Image'
						style={styles.searchInput}
						onChangeText={(text) => setQuery(text)}
					/>
					<TouchableOpacity onPress={handleSearch}>
						<Ionicons name='ios-search' size={dp(10)} color='gray' />
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default Home;
