import React from 'react';
import { SafeAreaView } from 'react-native';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import HomeScreen from '@/screens/home';

const App = () => {
	return (
		<GluestackUIProvider>
			<SafeAreaView className="flex-1 bg-peach">
				<HomeScreen />
			</SafeAreaView>
		</GluestackUIProvider>
	);
};

export default App;
