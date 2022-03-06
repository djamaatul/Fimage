import { Text, Pressable, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { useTailwind } from 'tailwind-rn';

const LoadMore = ({ onPress }) => {
	const loadmore = useSelector(({ search }) => search.loadmore);
	const isEnd = useSelector(({ search }) => search.isEnd);
	const tailwind = useTailwind();

	const styles = {
		button: tailwind('px-5 py-3 flex-row rounded-lg mt-2 mb-2'),
		text: tailwind('text-white'),
		pressed: tailwind('bg-rose-400').backgroundColor,
		unPressed: tailwind('bg-rose-500').backgroundColor,
		indicator: tailwind('text-rose-500').color,
	};
	return loadmore ? (
		<ActivityIndicator color={styles.indicator} size='large' style={{ marginVertical: 20 }} />
	) : (
		!isEnd && (
			<Pressable
				style={({ pressed }) => {
					return {
						backgroundColor: pressed ? styles.pressed : styles.unPressed,
						...styles.button,
					};
				}}
				onPress={onPress}
			>
				<Text style={styles.text}>Load More ..</Text>
			</Pressable>
		)
	);
};

export default LoadMore;
