/* eslint @typescript-eslint/no-require-imports: 0 */
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');
const {
	wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

// Get default Metro configuration
const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

// Custom Metro configuration for handling SVGs
const svgConfig = {
	transformer: {
		babelTransformerPath: require.resolve(
			'react-native-svg-transformer/react-native',
		),
	},
	resolver: {
		assetExts: assetExts.filter(ext => ext !== 'svg'), // Remove SVG from assetExts
		sourceExts: [...sourceExts, 'svg'], // Add SVG to sourceExts
	},
};

// Merge default and custom configurations
const baseConfig = mergeConfig(defaultConfig, svgConfig);

// Combine Reanimated and NativeWind configurations
const reanimatedConfig = wrapWithReanimatedMetroConfig(baseConfig);
const finalConfig = withNativeWind(reanimatedConfig, { input: './global.css' });

module.exports = finalConfig;
