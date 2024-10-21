import React from 'react';
import { useForm } from 'react-hook-form';
import {
	KeyboardAvoidingView,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';

import ControlledInput from '@/components/controlled-input.tsx';
import { Button, ButtonText } from '@/components/ui/button.tsx';
import { useStorage } from '@/hooks/useStorage.ts';

const shipmentTrackingData = [
	{
		time: '08:00 AM',
		title: 'Shipment Created',
		description:
			'The shipping label has been created and the carrier is awaiting the package.',
	},
	{
		time: '09:30 AM',
		title: 'Picked Up',
		description:
			'The package was picked up by the carrier at the origin facility.',
	},
	{
		time: '12:45 PM',
		title: 'In Transit',
		description: 'The package is in transit and headed to the destination.',
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
	},
];

const HomeScreen = () => {
	const { control, handleSubmit, reset } = useForm();

	const { value: storeValue, setValue } = useStorage<string[]>('values', []);

	const onSubmit = handleSubmit(values => {
		if (storeValue && storeValue.length < 10)
			setValue('values', [...(storeValue ?? []), values.test]);
		else if (storeValue) {
			storeValue.pop();
			setValue('values', [...(storeValue ?? []), values.test]);
		}
		reset();
	});

	return (
		<View className="flex-1 p-2 gap-8 pt-8">
			<View className="flex-row w-full gap-2">
				<ControlledInput
					control={control}
					name="test"
					placeholder="Enter Tracking Number"
				/>
				<Button onPress={onSubmit}>
					<ButtonText>Submit</ButtonText>
				</Button>
			</View>
			<View className="flex-row w-full gap-2 flex-wrap">
				{storeValue?.map((value, index) => {
					return (
						<TouchableWithoutFeedback
							key={value + index}
							onPress={() => {
								console.log(value);
							}}
							onLongPress={() => {
								const updated = storeValue.filter(value => value === value);
								setValue('values', updated);
							}}
						>
							<Text className="bg-gray-400 px-2 py-1 rounded">{value}</Text>
						</TouchableWithoutFeedback>
					);
				})}
			</View>
			<View className="w-full flex-1">
				<Timeline
					data={shipmentTrackingData}
					circleSize={15}
					lineColor="rgba(0,0,0,0.2)"
					circleColor="#f89e34"
					renderDetail={rowData => {
						const title = (
							<Text style={{ fontWeight: 'bold' }}>{rowData.title}</Text>
						);
						const desc = rowData.description ? (
							<Text>{rowData.description}</Text>
						) : null;
						return (
							<View style={{ flex: 1 }}>
								{title}
								{desc}
							</View>
						);
					}}
				/>
			</View>
			<KeyboardAvoidingView className="w-full gap-2">
				<ControlledInput control={control} name="pin" placeholder="Enter Pin" />
				<Button onPress={() => {}}>
					<ButtonText>View Address</ButtonText>
				</Button>
			</KeyboardAvoidingView>
		</View>
	);
};

export default HomeScreen;
