import { useState } from 'react';
import { Text, View, FlatList, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { dp } from '../utils/units';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { requestImages, requestMore } from '../redux/actions/search';

import { useTailwind } from 'tailwind-rn/dist';

import LoadingScreen from '../components/LoadingScreen';
import CardImage from '../components/CardImage';
import LoadMore from '../components/LoadMore';

const Search = ({ route }) => {
	const query = route.params.query;
	const [refreshing, setRefreshing] = useState(false);
	const images = useSelector(({ search }) => search.images);
	const page = useSelector(({ search }) => search.page);
	const isEmpty = useSelector(({ search }) => search.isEmpty);
	const dispatch = useDispatch();
	const tailwind = useTailwind();

	const handleMore = () => {
		dispatch(requestMore({ query, page: page }));
	};

	const handleRefresh = () => {
		dispatch(requestImages(query));
	};

	const styles = {
		container: tailwind('flex-1'),
		logoContainer: tailwind('justify-center items-center my-10'),
		listContainer: tailwind('justify-center items-center my-1 pb-2'),
		notfound: tailwind('text-rose-500'),
	};
	return (
		<View style={styles.container}>
			<LoadingScreen />
			{isEmpty && (
				<View style={styles.logoContainer}>
					<Ionicons name='ios-logo-tux' style={styles.notfound} size={dp(50)} />
					<Text style={styles.notfound}>Images Not Found</Text>
				</View>
			)}
			<FlatList
				refreshControl={
					<RefreshControl
						onRefresh={() => {
							handleRefresh();
						}}
						refreshing={refreshing}
					/>
				}
				contentContainerStyle={styles.listContainer}
				numColumns={2}
				data={images}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => {
					return (
						<CardImage
							id={item.id}
							uri={item.urls.thumb}
							description={item.description}
							user={item.user.name}
							uploaded={item.created_at}
							height={item.height}
							width={item.width}
							views={item.views}
							likes={item.likes}
						/>
					);
				}}
				ListFooterComponent={images.length != 0 && <LoadMore onPress={handleMore} />}
			/>
		</View>
	);
};

export default Search;
