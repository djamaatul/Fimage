import { View, Modal, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { useTailwind } from 'tailwind-rn';
import { dp } from '../utils/units';

const LoadingScreen = () => {
	const loading = useSelector(({ search }) => search.loading);
	const tailwind = useTailwind();

	const styles = {
		container: tailwind('flex-1 justify-center items-center'),
	};
	return (
		<Modal visible={loading}>
			<View style={styles.container}>
				<ActivityIndicator size={dp(24)} color='tomato' />
			</View>
		</Modal>
	);
};

export default LoadingScreen;
