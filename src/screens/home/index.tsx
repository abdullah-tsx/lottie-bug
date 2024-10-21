import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';

import { Button, ButtonText } from '@/components/ui/button.tsx';
import { Input, InputField } from '@/components/ui/input.tsx';

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
				<View className="flex-row w-full gap-2">
					<Controller
						render={({ field: { onBlur, onChange, value } }) => {
							return (
								<>
									<Input className="flex-1" variant="outline" size="md">
										<InputField
											onBlur={onBlur}
											onChangeText={onChange}
											value={value}
										/>
									</Input>
								</>
							);
						}}
						name="test"
						control={control}
					/>
					<Button onPress={onSubmit}>
						<ButtonText>Submit</ButtonText>
					</Button>
				</View>
			</View>
		</View>
	);
};

export default HomeScreen;
