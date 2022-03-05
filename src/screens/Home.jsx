import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { dp, vw } from '../utils/units';
import { Ionicons } from '@expo/vector-icons';

import { useDispatch } from 'react-redux';
import { requestImages } from '../redux/actions/search';

import LoadingScreen from '../components/LoadingScreen';

const Home = ({ navigation }) => {
	const [query, setQuery] = useState('');
	const dispatch = useDispatch();

	const handleSearch = () => {
		dispatch(requestImages(query));
		navigation.navigate('Search', { query });
	};

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<SafeAreaView>
				<LoadingScreen />
				<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
					<Text style={{ fontSize: dp(20), color: 'tomato', fontWeight: 'bold' }}>F</Text>
					<Text style={{ fontSize: dp(20), color: 'skyblue', fontWeight: 'bold' }}>Image</Text>
				</View>
				<View
					style={{
						marginTop: dp(10),
						backgroundColor: 'white',
						width: vw(80),
						paddingHorizontal: 20,
						paddingVertical: 10,
						borderRadius: 10,
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<TextInput
						placeholder='Search Image'
						style={{ flex: 1, color: 'gray' }}
						onChangeText={(text) => setQuery(text)}
					/>
					<TouchableOpacity style={{ marginLeft: 10 }} activeOpacity={0.6} onPress={handleSearch}>
						<Ionicons name='ios-search' size={dp(10)} color='gray' />
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default Home;
