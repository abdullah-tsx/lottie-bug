import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import StackNavigator from './stack-navigator';

const ApplicationNavigator = () => {
	return (
		<NavigationContainer>
			<StackNavigator />
		</NavigationContainer>
	);
};

export default ApplicationNavigator;
