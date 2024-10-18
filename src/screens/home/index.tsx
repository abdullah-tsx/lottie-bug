import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const HomeScreen = () => {
	const { control, handleSubmit } = useForm();

	const onSubmit = handleSubmit(values => {
		console.log('meow', values);
	});

	return (
		<View className="flex-1 p-2 border border-red-600">
			<Text className="text-2xl font-medium">Softcare Express</Text>
			<View>
				<Text className="text-lg">Track your package</Text>
				<Text className="text-lg">Enter your package Tracking number</Text>
				<View className="flex-row w-full">
					<Controller
						render={({ field: { onBlur, onChange, value } }) => {
							return (
								<>
									<TextInput
										onBlur={onBlur}
										onChangeText={onChange}
										value={value}
										placeholder="Enter your package tracking number"
										className="border rounded p-4 flex-1"
									/>
								</>
							);
						}}
						name="test"
						control={control}
					/>
					<TouchableOpacity
						onPress={onSubmit}
						className="items-center justify-around bg-black rounded-md px-4"
					>
						<Text className="text-white">Submit</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default HomeScreen;
