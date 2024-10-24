// types/routes.ts

import {
	type NativeStackNavigationOptions,
	type NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { type ComponentType } from 'react';

export type RootStackParamList = {
	splash: undefined;
	home: undefined;
};

export type ScreenProps<RouteName extends keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, RouteName>;

export type Route = {
	[K in keyof RootStackParamList]: {
		navigationOptions?: NativeStackNavigationOptions;
		name: K;
		Component: ComponentType<ScreenProps<K>>;
		withLayout?: boolean;
	};
}[keyof RootStackParamList];
