import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { BackHandler } from 'react-native';

export const useDisableSwipeBack = () => {
	useFocusEffect(
		useCallback(() => {
			const onBackPress = () => {
				return true;
			};

			BackHandler.addEventListener('hardwareBackPress', onBackPress);

			return () =>
				BackHandler.removeEventListener('hardwareBackPress', onBackPress);
		}, []),
	);
};
