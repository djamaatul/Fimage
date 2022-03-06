import { useEffect, useState } from 'react';
import { Text, View, FlatList, RefreshControl } from 'react-native';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useTailwind } from 'tailwind-rn/dist';

import CardImage from '../components/CardImage';
import { REQUEST_REFRESH_FAVORITE } from '../redux/actions/search';

const Favorite = () => {
	const [refreshing, setRefreshing] = useState(false);
	const favoriteImages = useSelector(({ search }) => search.favoriteImages);
	const dispatch = useDispatch();
	const tailwind = useTailwind();
	const styles = {
		container: tailwind('flex-1'),
		listContainer: tailwind('justify-center items-center my-1 pb-2'),
	};
	const handleRefresh = () => {
		setRefreshing(true);
		dispatch({
			type: REQUEST_REFRESH_FAVORITE,
		});
		setRefreshing(false);
	};
	return (
		<View style={styles.container}>
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
				data={favoriteImages}
				keyExtractor={(item, index) => index}
				renderItem={({ item }) => {
					return (
						<CardImage
							favoriteCard={true}
							uri={item.uri}
							description={item.description}
							user={item.user}
							uploaded={item.uploaded}
							height={item.height}
							width={item.width}
							views={item.views}
							likes={item.likes}
						/>
					);
				}}
			/>
		</View>
	);
};

export default Favorite;
