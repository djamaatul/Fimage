import { Modal, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { vh, dp } from '../utils/units';
import { Ionicons } from '@expo/vector-icons';
import { useTailwind } from 'tailwind-rn';

import { ADD_FAVORITE } from '../redux/actions/search';
import { useDispatch } from 'react-redux';

import Button from './Button';

const ImageDetails = (props) => {
	const tailwind = useTailwind();
	const dispatch = useDispatch();
	const date = new Date(props.uploaded);
	const uploaded = `${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()}`;
	const addFavorite = () => {
		dispatch({ type: ADD_FAVORITE, payload: { ...props } });
	};
	const styles = {
		container: tailwind('flex-1 justify-center items-center'),
		subContainer: {
			...tailwind('flex-1 bg-slate-200 px-2 w-5/6'),
			elevation: 10,
			maxHeight: vh(75),
		},
		header: {
			...tailwind('items-center flex-row border-b-slate-500 justify-end p-3'),
			borderBottomWidth: 0.3,
		},
		scrollContainer: tailwind('m-3'),
		image: { ...tailwind('w-96 h-80 self-center '), resizeMode: 'contain' },
		size: tailwind('mb-2 text-center'),
		contentContainer: { ...tailwind('p-3 border-gray-500'), borderBottomWidth: 0.3, borderTopWidth: 0.3 },
	};
	return (
		<Modal visible={props.show} transparent={true}>
			<View style={styles.container}>
				<View style={styles.subContainer}>
					<View style={styles.header}>
						<TouchableOpacity onPress={props.toggleShow}>
							<Ionicons name='ios-close' size={dp(10)} color='gray' />
						</TouchableOpacity>
					</View>
					<ScrollView showsVerticalScrollIndicator={false}>
						<View style={styles.scrollContainer}>
							<Image source={{ uri: props.uri }} style={styles.image} />
							<Text style={styles.size}>{`${props.width} x ${props.height} `}</Text>
							<View style={styles.contentContainer}>
								<Text>Take by : {props.user}</Text>
								<Text>Upload Date : {uploaded}</Text>
								<Text>Descriptions : </Text>
								<Text>{props.description}</Text>
							</View>
						</View>
					</ScrollView>
					{!props.favoriteCard && (
						<View style={tailwind('flex-row')}>
							<Button
								title={props.views ? props.views + ' Views' : props.likes + ' Likes'}
								disable={true}
								icon={props.views ? 'eye' : 'ios-thumbs-up'}
								onPress={() => null}
							/>
							<Button title='Favorite' icon='ios-heart' data={props.views} onPress={addFavorite} />
						</View>
					)}
				</View>
			</View>
		</Modal>
	);
};

export default ImageDetails;
