import { useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { dp, vw } from '../utils/units';
import ImageDetail from '../components/ImageDetail';

const CardImage = (props) => {
	const [show, setShow] = useState(false);

	const toggleShow = () => {
		setShow(!show);
	};
	return (
		<>
			<ImageDetail show={show} toggleShow={toggleShow} {...props} />
			<TouchableOpacity onPress={toggleShow}>
				<Image
					source={{
						uri: props.uri,
					}}
					style={{
						margin: vw(0.5),
						width: vw(48),
						height: vw(60),
						resizeMode: 'cover',
					}}
				/>
			</TouchableOpacity>
		</>
	);
};

export default CardImage;
