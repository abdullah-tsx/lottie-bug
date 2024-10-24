import {
	createNativeStackNavigator,
	type NativeStackNavigationOptions,
	type NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';

import Layout from '@/components/layout';
import { appRoutes } from '@/routes';
import { type RootStackParamList } from '@/types';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const defaultStackNavigatorOptions: NativeStackNavigationOptions = {
	headerShown: false,
};

const StackNavigator = () => {
	return (
		<Navigator
			screenOptions={defaultStackNavigatorOptions}
			initialRouteName="splash"
		>
			{appRoutes.map(
				({ name, Component, navigationOptions, withLayout = true }) => {
					type ScreenProps = NativeStackScreenProps<
						RootStackParamList,
						typeof name
					>;

					const WrappedComponent: React.FC<ScreenProps> = props =>
						withLayout ? (
							<Layout>
								{/*@ts-expect-error ts cannot map union type*/}
								<Component {...props} />
							</Layout>
						) : (
							<>
								{/*@ts-expect-error ts cannot map union type*/}
								<Component {...props} />
							</>
						);

					return (
						<Screen
							key={name}
							name={name}
							component={WrappedComponent}
							options={navigationOptions}
						/>
					);
				},
			)}
		</Navigator>
	);
};

export default StackNavigator;
