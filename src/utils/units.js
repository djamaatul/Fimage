import { Dimensions, PixelRatio } from 'react-native';

function vh(persen) {
	return (Dimensions.get('window').height / 100) * persen;
}

function vw(persen) {
	return (Dimensions.get('window').width / 100) * persen;
}

function dp(pixel) {
	return PixelRatio.getPixelSizeForLayoutSize(pixel);
}

export { dp, vw, vh };
