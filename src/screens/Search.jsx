import { Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { vw } from '../utils/units';

import { requestMore } from '../redux/actions/search';
import { useDispatch } from 'react-redux';

import LoadingScreen from '../components/LoadingScreen';
import CardImage from '../components/CardImage';
import LoadMore from '../components/LoadMore';

const Search = ({ route }) => {
	const images = useSelector(({ search }) => search.images);
	const page = useSelector(({ search }) => search.page);
	const dispatch = useDispatch();

	const handleMore = () => {
		dispatch(requestMore({ query: route.params.query, page: page }));
	};
	return (
		<View style={{ flex: 1, marginVertical: 1 }}>
			<LoadingScreen />
			{images.length == 0 && (
				<View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
					<Ionicons name='planet' color='red' size={vw(40)} />
					<Text>Images Not Found</Text>
				</View>
			)}
			<FlatList
				contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
				numColumns={2}
				data={images}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => {
					return (
						<CardImage
							uri={item.urls.thumb}
							description={item.description}
							user={item.user.name}
							uploaded={item.created_at}
							height={item.height}
							width={item.width}
						/>
					);
				}}
				ListFooterComponent={images.length != 0 && <LoadMore onPress={handleMore} />}
			/>
		</View>
	);
};

export default Search;
