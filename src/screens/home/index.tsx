import { cn } from '@gluestack-ui/nativewind-utils/cn';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	Text,
	View,
} from 'react-native';
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

	const handleChipPress = useCallback(
		(id: string) => {
			const filtered = storeValue!.filter(item => item !== id);
			setValue('values', filtered);
		},
		[setValue, storeValue],
	);
	//TODO: remove virtualized list warning and keyboard avoiding view
	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<View
				className={cn('flex-1 w-full h-full p-2 gap-2', {
					'items-center justify-center': !isResultAvailable,
				})}
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
					{storeValue?.map((value, index) => {
						return (
							<Chip
								key={index}
								text={value}
								onPress={() => {
									handleChipPress(value);
								}}
							/>
						);
					})}
				</View>

				{isResultAvailable && (
					<>
						<View className="w-full">
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
								renderDetail={rowData => {
									const time = (
										<Text className="mb-2 font-light text-xs italic">
											{rowData.time}
										</Text>
									);
									const title = (
										<Text style={{ fontWeight: 'bold' }}>{rowData.title}</Text>
									);
									const desc = rowData.description ? (
										<Text>{rowData.description}</Text>
									) : null;
									return (
										<View style={{ flex: 1 }}>
											{time}
											{title}
											{desc}
										</View>
									);
								}}
							/>
						</View>
						<KeyboardAvoidingView
							className="w-full gap-2"
							behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
						>
							<Input variant="outline" size="md">
								<InputField placeholder="Enter Pin" />
							</Input>
							<Button
								onPress={() => {
									setIsAddressVisible(!isAddressVisible);
								}}
							>
								<ButtonText>
									{isAddressVisible ? 'Hide' : 'View'} Address
								</ButtonText>
							</Button>
							{isAddressVisible && (
								<View className="flex-1 flex-row gap-2 items-center p-1">
									<IonIcon name="location-sharp" />
									<Text className="text-start text-wrap max-w-full break-words">
										Iris Bay Tower, Office No 1509 Business Bay, Dubai (UAE)
										Iris Bay Tower Office No 1509 Business Bay, Dubai (UAE)
									</Text>
								</View>
							)}
						</KeyboardAvoidingView>
					</>
				)}
			</View>
		</ScrollView>
	);
};

export default HomeScreen;
