import { View } from 'react-native';
import ListCard from '../components/ListCard';
const About = ({ navigation }) => {
	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<View style={{ marginVertical: 10 }}>
				<ListCard
					title='About'
					subtitle='Tentang, Contact'
					onPress={() => navigation.navigate('About')}
					icon='person'
				/>
				<ListCard title='Comming soon..' subtitle='Future feature' onPress={() => null} icon='settings' />
				<ListCard title='Comming soon..' subtitle='Future feature' onPress={() => null} icon='heart' />
			</View>
		</View>
	);
};

export default About;
