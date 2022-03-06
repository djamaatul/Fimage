import { createStackNavigator } from '@react-navigation/stack';
import { Home, Search } from '../../screens';

import { TextInput } from 'react-native';
import { View } from 'react-native';
import SearchHeader from '../../components/SearchHeader';
const Stack = createStackNavigator();
const Homee = () => {
	return (
		<Stack.Navigator initialRouteName='Dashboard'>
			<Stack.Screen
				name='Dashboard'
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='Search'
				component={Search}
				options={{
					header: SearchHeader,
				}}
			/>
		</Stack.Navigator>
	);
};

export default Homee;
