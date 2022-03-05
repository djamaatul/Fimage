import { createStackNavigator } from '@react-navigation/stack';
import { Home, Search } from '../../screens';

const Stack = createStackNavigator();
const Homee = () => {
	return (
		<Stack.Navigator initialRouteName='Search'>
			<Stack.Screen name='Dashboard' component={Home} />
			<Stack.Screen name='Search' component={Search} />
		</Stack.Navigator>
	);
};

export default Homee;
