module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		'nativewind/babel', // NativeWind plugin for utility-first styling
		[
			'module-resolver',
			{
				root: ['./'],
				alias: {
					'@': './src',
				},
			},
		],
	],
};
