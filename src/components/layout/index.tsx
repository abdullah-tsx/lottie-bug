import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { ListRenderItemInfo, SafeAreaView } from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';

import Header from '@/components/header';

const Layout: FC<PropsWithChildren> = ({ children }) => {
	const data: ReactNode[] = React.Children.toArray(children);

	return (
		<SafeAreaView className="w-screen h-screen bg-neutral-50">
			<Header />
			<KeyboardAwareFlatList
				data={data}
				keyExtractor={(_, index) => index.toString()}
				renderItem={({ item }: ListRenderItemInfo<ReactNode>) => <>{item}</>}
				className="px-4"
			/>
		</SafeAreaView>
	);
};

export default Layout;
