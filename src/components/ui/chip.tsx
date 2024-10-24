import React, { FC, useEffect, useRef } from 'react';
import { Animated, Text, TouchableWithoutFeedback, View } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

type ChipProps = {
	text: string;
	onPressDelete: () => void;
	onPressText: () => void;
};

const Chip: FC<ChipProps> = ({ text, onPressDelete, onPressText, ...rest }) => {
	// Animated values for opacity and scale
	const fadeAnim = useRef(new Animated.Value(0)).current;
	const scaleAnim = useRef(new Animated.Value(0.8)).current; // Start slightly smaller for scale-in effect

	useEffect(() => {
		// When the chip mounts, animate in
		Animated.parallel([
			Animated.timing(fadeAnim, {
				toValue: 1,
				duration: 300,
				useNativeDriver: true,
			}),
			Animated.spring(scaleAnim, {
				toValue: 1,
				friction: 5,
				useNativeDriver: true,
			}),
		]).start();
	}, [fadeAnim, scaleAnim]);

	return (
		<Animated.View
			style={{
				opacity: fadeAnim,
				transform: [{ scale: scaleAnim }],
			}}
			{...rest}
		>
			<TouchableWithoutFeedback onPress={onPressText}>
				<View className="bg-peach rounded flex flex-row items-center max-h-fit gap-1">
					<Text className="mx-3 my-2 text-white">{text}</Text>
					<TouchableWithoutFeedback onPress={onPressDelete}>
						<View className="self-stretch items-center justify-center bg-red-600 rounded-r px-2">
							<IonIcon name="close" size={15} color="white" />
						</View>
					</TouchableWithoutFeedback>
				</View>
			</TouchableWithoutFeedback>
		</Animated.View>
	);
};

export default Chip;
