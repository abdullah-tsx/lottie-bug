import 'react-native-reanimated';

import React from 'react';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import ApplicationNavigator from '@/navigators/application-navigator';

const App = () => {
	return (
		<GluestackUIProvider>
			<ApplicationNavigator />
		</GluestackUIProvider>
	);
};

export default App;
