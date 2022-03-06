import { Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTailwind } from 'tailwind-rn/dist';
import { dp } from '../utils/units';

const Button = ({ onPress, title, icon, disable }) => {
	const tailwind = useTailwind();
	const styles = {
		white: tailwind('text-white'),
		icon: tailwind('mr-2'),
	};
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => {
				return tailwind(
					` flex-row ${
						disable
							? 'bg-gray-500 border-0 border-transparent'
							: `${
									pressed
										? 'bg-rose-400 border-0 border-transparent '
										: 'bg-rose-500 border-0 border-transparent'
							  }`
					} text-center border-2 m-2 px-5 py-2 rounded-lg items-center flex-grow`
				);
			}}
		>
			<Ionicons name={icon} size={dp(10)} color={styles.white.color} style={styles.icon} />
			<Text style={styles.white}>{title}</Text>
		</Pressable>
	);
};

export default Button;
