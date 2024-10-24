// src/screens/splash.tsx

import LottieView from 'lottie-react-native';
import React, { type FC, useRef } from 'react';

import animationData from '@/assets/animations/splash.json';
import { type ScreenProps } from '@/types/routes';

type SplashScreenProps = ScreenProps<'splash'>;

const SplashScreen: FC<SplashScreenProps> = ({ navigation }) => {
	const animation = useRef<LottieView>(null);

	return (
		<LottieView
			source={animationData}
			autoPlay
			loop={false}
			style={{ flex: 1, width: '100%', height: '100%' }}
			resizeMode="cover"
			renderMode="SOFTWARE"
			ref={animation}
			onAnimationFinish={() => {
				navigation.replace('home');
			}}
		/>
	);
};

export default SplashScreen;
