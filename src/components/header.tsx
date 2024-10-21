import React from 'react';
import { Image, View } from 'react-native';

import Logo from '@/assets/images/logo.png';

const Header = () => {
	return (
		<View className="items-center justify-center w-screen bg-peach h-[10vh]">
			<Image source={Logo} className="h-full w-auto" resizeMode="contain" />
		</View>
	);
};

export default Header;
