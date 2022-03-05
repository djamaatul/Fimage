import { View, Modal, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { dp } from '../utils/units';

const LoadingScreen = () => {
	const loading = useSelector(({ search }) => search.loading);
	return (
		<Modal visible={loading}>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size={dp(24)} color='tomato' />
			</View>
		</Modal>
	);
};

export default LoadingScreen;
