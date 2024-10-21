// eslint-disable-next-line @typescript-eslint/no-require-imports
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { withNativeWind } = require('nativewind/metro');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = mergeConfig(getDefaultConfig(__dirname));

module.exports = withNativeWind(config, { input: './global.css' });
