import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import { Favorite, About, Setting } from '../screens';
import Home from './stacks/Home';

const Tabs = createBottomTabNavigator();

const Navigations = () => {
	return (
		<Tabs.Navigator
			initialRouteName='Home'
			screenOptions={{
				tabBarStyle: {
					height: 60,
				},
				tabBarInactiveTintColor: '#333333',
				tabBarActiveTintColor: '#ff4444',
			}}
		>
			<Tabs.Screen
				name='Home'
				component={Home}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused, color }) => {
						return focused ? (
							<Ionicons name='image' size={30} color={color} />
						) : (
							<Ionicons name='image-outline' size={30} color={color} />
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
								size={30}
								color={color}
							/>
						) : (
							<MaterialIcons name='favorite-outline' size={30} color={color} />
						);
					},
				}}
			/>
			<Tabs.Screen
				name='SettingStack'
				component={Setting}
				options={{
					tabBarIcon: ({ focused, color }) => {
						return focused ? (
							<Ionicons name='ios-settings' size={30} color={color} />
						) : (
							<Ionicons name='ios-settings-outline' size={30} color={color} />
						);
					},
				}}
			/>
		</Tabs.Navigator>
	);
};

export default Navigations;
