import 'react-native-reanimated';

import React from 'react';

import Layout from '@/components/layout';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import HomeScreen from '@/screens/home';

const App = () => {
	return (
		<GluestackUIProvider>
			<Layout>
				<HomeScreen />
			</Layout>
		</GluestackUIProvider>
	);
};

export default App;
