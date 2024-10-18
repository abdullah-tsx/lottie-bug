import React from 'react';
import { SafeAreaView } from 'react-native';

import HomeScreen from '@/screens/home';

const App = () => {
	return (
		<SafeAreaView className="flex-1 bg-peach">
			<HomeScreen />
		</SafeAreaView>
	);
};

export default App;
