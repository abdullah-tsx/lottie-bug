module.exports = {
	env: {
		browser: true,
		es2021: true,
		'react-native/react-native': true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react-native/all', // React Native-specific rules
		'plugin:prettier/recommended', // Prettier integration for code formatting
		'plugin:jest/recommended', // Jest recommended rules for testing
	],
	parser: '@typescript-eslint/parser', // Parsing TypeScript files
	parserOptions: {
		ecmaFeatures: {
			jsx: true, // Enabling JSX
		},
		ecmaVersion: 13, // ECMAScript version to support modern JS features
		sourceType: 'module', // Using ES modules
	},
	plugins: [
		'@typescript-eslint', // TypeScript plugin for linting
		'prettier', // Prettier plugin for formatting
		'react', // React plugin for linting
		'react-hooks', // React Hooks plugin
		'react-native', // React Native plugin for linting
		'jest', // Jest plugin for testing
		'simple-import-sort', // Plugin for sorting imports/exports
	],
	rules: {
		// Prettier integration
		'prettier/prettier': 'error',

		// Simple Import Sort
		'simple-import-sort/imports': 'error', // Sort imports
		'simple-import-sort/exports': 'error', // Sort exports

		// Disable import/order to avoid redundancy with simple-import-sort
		'import/order': 'off',

		// React and JSX rules
		'react/jsx-props-no-spreading': 'off', // Allow prop spreading in JSX
		'react/require-default-props': 'off', // Disable default prop requirements
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function', // Enforce arrow functions for functional components
				unnamedComponents: 'arrow-function',
			},
		],
		'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }], // Allow JSX in .jsx and .tsx files
		'react/react-in-jsx-scope': 'off', // Not required for React 17+ (automatic JSX transformation)

		// React Native specific rules
		'react-native/no-inline-styles': 'off', // Disable warning for inline styles (common in React Native)
		'react-native/split-platform-components': 2, // Ensure platform-specific files are used correctly

		// TypeScript-specific rules
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_', // Ignore variables starting with an underscore
				varsIgnorePattern: '^_', // Ignore variables starting with an underscore
			},
		],

		// General rules
		'no-underscore-dangle': 'off', // Allow underscore dangle in variable names
		'no-eval': 'off', // Disable restriction on eval (customize based on your preference)
		'no-await-in-loop': 'off', // Allow await in loops
		'no-restricted-syntax': 'off', // Disable restrictions on specific syntax
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'], // Resolve these extensions
			},
			typescript: {}, // Use TypeScript resolver
		},
		react: {
			version: 'detect', // Automatically detect the version of React to use
		},
	},
};
