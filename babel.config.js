module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		'nativewind/babel', // NativeWind plugin for utility-first styling
		[
			'module-resolver',
			{
				root: ['./'], // Project root
				alias: {
					'@components/*': './src/components/*',
					'@screens/*': './src/screens/*',
					'@utils/*': './src/utils/*',
					'@services/*': './src/services/*',
					'@assets/*': './src/assets/*',
					'@hooks/*': './src/hooks/*',
				},
			},
		],
	],
};
