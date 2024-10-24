import HomeScreen from '@/screens/home';
import SplashScreen from '@/screens/splash';
import { type Route } from '@/types/routes';

export const appRoutes: Route[] = [
	{
		name: 'splash' as const,
		Component: SplashScreen,
		navigationOptions: {
			headerShown: false,
			title: 'Splash Screen',
		},
		withLayout: false,
	},
	{
		name: 'home' as const,
		Component: HomeScreen,
		navigationOptions: {
			headerShown: false,
			title: 'Home Screen',
			headerBackVisible: false,
		},
	},
];
