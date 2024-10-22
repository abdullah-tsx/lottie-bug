import React, { FC } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

type ChipProps = {
	text: string;
	onPress?: () => void;
};

const Chip: FC<ChipProps> = ({ text, onPress, ...rest }) => {
	return (
		<>
			<View
				className="bg-peach rounded flex flex-row items-center max-h-fit gap-1"
				{...rest}
			>
				<Text className="mx-3 my-2 text-white">{text}</Text>
				<TouchableWithoutFeedback onPress={onPress}>
					<View className="self-stretch items-center justify-center bg-red-600 rounded-r px-2">
						<IonIcon name="close" size={15} color="white" />
					</View>
				</TouchableWithoutFeedback>
			</View>
		</>
	);
};

export default Chip;
