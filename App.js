import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigations from './src/navigations';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Provider } from 'react-redux';
import store from './src/redux/store';
export default function App() {
	return (
		<View style={styles.container}>
			<Provider store={store}>
				<SafeAreaProvider>
					<NavigationContainer>
						<Navigations />
						<StatusBar backgroundColor='rgba(0,0,0,0.2)' />
					</NavigationContainer>
				</SafeAreaProvider>
			</Provider>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
