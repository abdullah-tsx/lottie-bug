import React, { FC } from 'react';
import { Control, Controller, FieldErrors, FieldValues } from 'react-hook-form';
import { TextInputProps, ViewProps } from 'react-native';

import { Input, InputField } from '@/components/ui/input.tsx';

type ControlledInputProps = TextInputProps & {
	control: Control<FieldValues>;
	errors?: FieldErrors<FieldValues>;
	name: string;
	placeholder?: string;
	viewProps?: ViewProps;
};
const ControlledInput: FC<ControlledInputProps> = ({
	control,
	name,
	placeholder,
	viewProps,
	...props
}) => {
	return (
		<Controller
			render={({ field: { onBlur, onChange, value } }) => {
				return (
					<>
						<Input
							className="flex-1"
							variant="outline"
							size="md"
							{...viewProps}
						>
							<InputField
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
								placeholder={placeholder}
								{...props}
							/>
						</Input>
					</>
				);
			}}
			name={name}
			control={control}
		/>
	);
};

export default ControlledInput;
