import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigations from './src/navigations';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<Navigations />
				<StatusBar style='auto' />
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
