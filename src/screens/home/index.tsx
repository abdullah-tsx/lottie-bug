import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Animated, Easing, Text, View } from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import Timeline from 'react-native-timeline-flatlist';
import IonIcon from 'react-native-vector-icons/Ionicons';

import ControlledInput from '@/components/controlled-input';
import { Button, ButtonText } from '@/components/ui/button';
import Chip from '@/components/ui/chip';
import { Input, InputField } from '@/components/ui/input';
import { useStorage } from '@/hooks/useStorage';
import { TrackingFormData, TrackingSchema } from '@/schemas';

const shipmentTrackingData = [
	{
		time: '08:00 AM',
		title: 'Shipment Created',
		description:
			'The shipping label has been created and the carrier is awaiting the package.',
		lineColor: '#f89e34',
	},
	{
		time: '09:30 AM',
		title: 'Picked Up',
		description:
			'The package was picked up by the carrier at the origin facility.',
		lineColor: '#f89e34',
	},
	{
		time: '12:45 PM',
		title: 'In Transit',
		description: 'The package is in transit and headed to the destination.',
		lineColor: '#f89e34',
	},
	{
		time: '02:15 PM',
		title: 'Out for Delivery',
		description: 'The package is out for delivery and will arrive shortly.',
	},
	{
		time: '03:30 PM',
		title: 'Delivered',
		description: 'The package has been delivered to the destination.',
		circleColor: 'rgba(0,0,0,0.2)',
	},
];

const HomeScreen = () => {
	const [isAddressVisible, setIsAddressVisible] = useState(false);
	const [isResultAvailable, setIsResultAvailable] = useState(false);
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<TrackingFormData>({
		defaultValues: TrackingSchema.defaultValues,
		resolver: TrackingSchema.resolver,
	});

	const { value: storeValue, setValue } = useStorage<string[]>('values', []);

	const position = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(position, {
			toValue: isResultAvailable ? 1 : 0,
			duration: 500,
			easing: Easing.inOut(Easing.ease),
			useNativeDriver: false,
		}).start();
	}, [isResultAvailable]);

	const animatedStyle = {
		marginTop: position.interpolate({
			inputRange: [0, 1],
			outputRange: ['70%', '0%'],
		}),
	};

	const onSubmit = handleSubmit(values => {
		if (storeValue && storeValue.length < 10)
			setValue('values', [...(storeValue ?? []), values.trackingId]);
		else if (storeValue) {
			storeValue.pop();
			setValue('values', [...(storeValue ?? []), values.trackingId]);
		}
		reset();
		setIsResultAvailable(true);
	});

	const handleChipPressDelete = useCallback(
		(id: string) => {
			const filtered = storeValue!.filter(item => item !== id);
			setValue('values', filtered);
		},
		[setValue, storeValue],
	);
	const handleChipPressText = useCallback(
		(id: string) => {
			setIsResultAvailable(true);
			console.log(id);
		},
		[storeValue],
	);

	const sections = [{ id: 'timeline', content: 'timeline' }];

	return (
		<View className="flex-1 p-4">
			<Animated.View
				style={[
					{
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%',
					},
					animatedStyle,
				]}
			>
				<View className="flex-row w-full gap-2">
					<ControlledInput
						control={control}
						name="trackingId"
						placeholder="Enter Tracking Number"
						errors={errors}
					/>
					<Button onPress={onSubmit}>
						<ButtonText>Submit</ButtonText>
					</Button>
				</View>
				<View className="flex-row w-full items-center justify-center gap-2 flex-wrap my-3">
					{storeValue?.map((value, index) => (
						<Chip
							key={index}
							text={value}
							onPressDelete={() => handleChipPressDelete(value)}
							onPressText={() => {
								handleChipPressText(value);
							}}
						/>
					))}
				</View>
			</Animated.View>

			<KeyboardAwareFlatList
				data={sections}
				extraScrollHeight={20}
				showsVerticalScrollIndicator={false}
				keyExtractor={item => item.id}
				renderItem={_ => {
					return isResultAvailable ? (
						<View className="w-full" style={{ flex: 2 }}>
							<Timeline
								data={shipmentTrackingData}
								circleSize={15}
								showTime={false}
								lineColor="rgba(0,0,0,0.2)"
								circleColor="#f89e34"
								columnFormat="single-column-left"
								isUsingFlatlist={true}
								eventDetailStyle={{
									marginTop: -10,
									marginBottom: 10,
								}}
								renderDetail={rowData => (
									<View style={{ flex: 1 }}>
										<Text className="mb-2 font-light text-xs italic">
											{rowData.time}
										</Text>
										<Text style={{ fontWeight: 'bold' }}>{rowData.title}</Text>
										{rowData.description && <Text>{rowData.description}</Text>}
									</View>
								)}
							/>
						</View>
					) : null;
				}}
				ListFooterComponent={() => {
					return isResultAvailable ? (
						<View className="w-full gap-2" style={{ paddingTop: 16 }}>
							<Input variant="outline" size="md">
								<InputField placeholder="Enter Pin" />
							</Input>
							<Button onPress={() => setIsAddressVisible(!isAddressVisible)}>
								<ButtonText>
									{isAddressVisible ? 'Hide' : 'View'} Destination Address
								</ButtonText>
							</Button>
							{isAddressVisible && (
								<View className="flex-row gap-2 items-center p-2">
									<IonIcon name="location-sharp" />
									<Text className="text-start w-full p-1">
										Burj Khalifa - 1 Sheikh Mohammed bin Rashid Blvd - Downtown
										Dubai - Dubai (UAE)
									</Text>
								</View>
							)}
						</View>
					) : null;
				}}
			/>
		</View>
	);
};

export default HomeScreen;
