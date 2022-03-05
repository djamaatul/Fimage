import { Text, Pressable, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

const LoadMore = ({ onPress }) => {
	const loadmore = useSelector(({ search }) => search.loadmore);
	const isEmpty = useSelector(({ search }) => search.isEmpty);
	return loadmore ? (
		<ActivityIndicator color='red' size='large' style={{ marginVertical: 20 }} />
	) : (
		!isEmpty && (
			<Pressable
				style={({ pressed }) => {
					return {
						backgroundColor: pressed ? 'red' : 'transparent',
						paddingHorizontal: 20,
						paddingVertical: 10,
						flexDirection: 'row',
						borderRadius: 7,
						borderWidth: 0.5,
						borderColor: 'grey',
						marginVertical: 10,
					};
				}}
				onPress={onPress}
			>
				<Text style={{ color: 'grey' }}>Load More ..</Text>
			</Pressable>
		)
	);
};

export default LoadMore;
