module.exports = {
	presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./'],
				alias: {
					'@': './src',
				},
			},
			'react-native-reanimated/plugin', //this has to be at the end https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/
		],
	],
};
