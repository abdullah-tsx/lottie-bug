import React, { FC, PropsWithChildren } from 'react';
import { SafeAreaView, View } from 'react-native';

import Header from '@/components/header';

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<SafeAreaView className="w-screen h-screen bg-neutral-50">
			<Header />
			<View className="flex-1">{children}</View>
		</SafeAreaView>
	);
};

export default Layout;
