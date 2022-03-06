import { createStackNavigator } from '@react-navigation/stack';
import { Setting, About } from '../../screens';

const Stack = createStackNavigator();
const SettingStack = () => {
	return (
		<Stack.Navigator initialRouteName='Setting'>
			<Stack.Screen name='Setting' component={Setting} />
			<Stack.Screen name='About' component={About} />
		</Stack.Navigator>
	);
};

export default SettingStack;
