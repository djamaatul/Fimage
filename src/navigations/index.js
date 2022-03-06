import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useTailwind } from 'tailwind-rn/dist';

import { Favorite } from '../screens';
import Home from './stacks/Home';
import Setting from './stacks/Setting';
import { dp } from '../utils/units';

const Tabs = createBottomTabNavigator();

const Navigations = () => {
	const tailwind = useTailwind();
	const styles = {
		active: tailwind('text-rose-500'),
		inActive: tailwind('text-gray-500'),
	};
	return (
		<Tabs.Navigator
			initialRouteName='Home'
			screenOptions={{
				tabBarStyle: {
					height: 60,
				},
				tabBarInactiveTintColor: styles.inActive.color,
				tabBarActiveTintColor: styles.active.color,
				tabBarHideOnKeyboard: true,
			}}
		>
			<Tabs.Screen
				name='Home'
				component={Home}
				options={{
					tabBarLabel: 'Search',
					headerShown: false,
					tabBarIcon: ({ focused, color }) => {
						return focused ? (
							<Ionicons name='image' size={dp(13)} color={color} />
						) : (
							<Ionicons name='image-outline' size={dp(13)} color={color} />
						);
					},
				}}
			/>
			<Tabs.Screen
				name='Favorite'
				component={Favorite}
				options={{
					tabBarIcon: ({ focused, color }) => {
						return focused ? (
							<MaterialIcons
								style={{
									position: 'absolute',
								}}
								name='favorite'
								size={dp(13)}
								color={color}
							/>
						) : (
							<MaterialIcons name='favorite-outline' size={dp(13)} color={color} />
						);
					},
				}}
			/>
			<Tabs.Screen
				name='SettingStack'
				component={Setting}
				options={{
					tabBarLabel: 'Setting',
					headerShown: false,
					tabBarIcon: ({ focused, color }) => {
						return focused ? (
							<Ionicons name='ios-settings' size={dp(13)} color={color} />
						) : (
							<Ionicons name='ios-settings-outline' size={dp(13)} color={color} />
						);
					},
				}}
			/>
		</Tabs.Navigator>
	);
};

export default Navigations;
