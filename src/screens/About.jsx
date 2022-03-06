import { View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';

const About = () => {
	const tailwind = useTailwind();
	return (
		<View style={tailwind('flex-1 justify-center items-center')}>
			<Text>Develop by : </Text>
			<Text> D. Jama'atul Anbiya</Text>
			<Text>djamatul.anbiya@gmail.com</Text>
			<Text>+6289697823201</Text>
		</View>
	);
};

export default About;
