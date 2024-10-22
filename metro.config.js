// eslint-disable-next-line @typescript-eslint/no-require-imports
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { withNativeWind } = require('nativewind/metro');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const {
	wrapWithReanimatedMetroConfig,
	// eslint-disable-next-line @typescript-eslint/no-require-imports
} = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const baseConfig = getDefaultConfig(__dirname);
const config = mergeConfig(baseConfig);

// Combine Reanimated and NativeWind configurations
const reanimatedConfig = wrapWithReanimatedMetroConfig(config);
const finalConfig = withNativeWind(reanimatedConfig, { input: './global.css' });

module.exports = finalConfig;
