import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CardView = ({ onPress, title, subtitle, icon }) => {
	return (
		<Pressable
			style={({ pressed }) => {
				return {
					backgroundColor: pressed ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.0)',
					flexDirection: 'row',
					alignItems: 'center',
					padding: 10,
					borderRadius: 10,
					marginHorizontal: 5,
				};
			}}
			onPress={onPress}
		>
			<Ionicons name={icon} color={'gray'} size={24} />
			<View style={{ marginLeft: 20 }}>
				<Text style={{ color: 'black', fontSize: 20 }}>{title}</Text>
				<Text style={{ color: 'gray' }}>{subtitle}</Text>
			</View>
		</Pressable>
	);
};

export default CardView;
