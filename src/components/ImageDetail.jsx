import { Modal, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { vw, vh, dp } from '../utils/units';
import { Ionicons } from '@expo/vector-icons';

const ImageDetails = (props) => {
	const date = new Date(props.uploaded);
	const uploaded = `${date.getDate()} -${date.getMonth()} - ${date.getFullYear()}`;
	return (
		<Modal visible={props.show} transparent={true}>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<View
					style={{
						backgroundColor: 'white',
						elevation: 5,
						width: vw(90),
						height: vh(70),
					}}
				>
					<View
						style={{
							borderBottomWidth: 0.3,
							borderBottomColor: 'gray',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'flex-end',
							paddingVertical: dp(6),
							paddingHorizontal: dp(8),
						}}
					>
						<TouchableOpacity
							onPressIn={props.toggleShow}
							style={{ marginLeft: 10 }}
							activeOpacity={0.6}
							onPress={() => setShow(false)}
						>
							<Ionicons name='ios-close' size={dp(10)} color='gray' />
						</TouchableOpacity>
					</View>
					<View style={{ padding: 20 }}>
						<ScrollView>
							<Image
								source={{ uri: props.uri }}
								style={{ width: dp(150), height: dp(100), resizeMode: 'contain', alignSelf: 'center' }}
							/>
							<Text
								style={{ textAlign: 'center', marginVertical: 10 }}
							>{`${props.width} x ${props.height} `}</Text>
							<View style={{ borderWidth: 0.3, borderColor: 'gray', padding: 10 }}>
								<Text>Take by : {props.user}</Text>
								<Text>Upload Date : {uploaded}</Text>
								<Text>Descriptions : </Text>
								<Text>{props.description}</Text>
							</View>
						</ScrollView>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default ImageDetails;
