import { cn } from '@gluestack-ui/nativewind-utils/cn';
import React from 'react';
import {
	type Control,
	Controller,
	type FieldErrors,
	type FieldValues,
	type Path,
} from 'react-hook-form';
import {
	Platform,
	Text,
	type TextInputProps,
	View,
	type ViewProps,
} from 'react-native';

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
							'h-12': Platform.OS === 'android',
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
