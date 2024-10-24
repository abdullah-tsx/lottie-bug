import React from 'react';
import { View } from 'react-native';

import Logo from '@/assets/svgs/logo.svg';

const Header = () => {
	return (
		<View className="items-center justify-center w-screen bg-peach h-[10vh]">
			<Logo width="100%" height="100%" />
		</View>
	);
};

export default Header;
