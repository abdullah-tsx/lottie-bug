import { cn } from '@gluestack-ui/nativewind-utils/cn';
import React from 'react';
import {
	Control,
	Controller,
	FieldErrors,
	FieldValues,
	Path,
} from 'react-hook-form';
import { Text, TextInputProps, View, ViewProps } from 'react-native';

import { Input, InputField } from '@/components/ui/input';

type ControlledInputProps<TFieldValues extends FieldValues> = TextInputProps & {
	control: Control<TFieldValues>;
	errors?: FieldErrors<TFieldValues>;
	name: Path<TFieldValues>;
	placeholder?: string;
	viewProps?: ViewProps;
};

const ControlledInput = <TFieldValues extends FieldValues>(
	props: ControlledInputProps<TFieldValues>,
) => {
	const { control, name, placeholder, viewProps, ...restProps } = props;

	return (
		<Controller
			control={control}
			name={name}
			render={({
				field: { onBlur, onChange, value },
				fieldState: { error },
			}) => (
				<View className="flex-1 flex-col gap-2">
					<Input
						className={cn({
							'border-red-500': Boolean(error?.message),
						})}
						variant="outline"
						size="md"
						{...viewProps}
					>
						<InputField
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							placeholder={placeholder}
							{...restProps}
						/>
					</Input>
					{error && (
						<Text className="text-red-500 first-letter:uppercase">
							{error.message}
						</Text>
					)}
				</View>
			)}
		/>
	);
};

export default ControlledInput;
