module.exports = {
	env: {
		browser: true, // Enable browser global variables
		es2021: true, // Support modern ES features (ES2021)
		'react-native/react-native': true, // Enable React Native environment
		jest: true, // Enable Jest global variables for testing
	},
	extends: [
		'eslint:recommended', // Use ESLint's recommended rules
		'plugin:@typescript-eslint/recommended', // TypeScript-specific linting rules
		'plugin:react/recommended', // React-specific linting rules
		'plugin:react-hooks/recommended', // React Hooks-specific linting rules
		'plugin:react-native/all', // React Native-specific rules
		'plugin:prettier/recommended', // Prettier integration for code formatting
		'plugin:jest/recommended', // Jest recommended rules for testing
	],
	parser: '@typescript-eslint/parser', // Use TypeScript parser to lint .ts and .tsx files
	parserOptions: {
		ecmaFeatures: {
			jsx: true, // Enable JSX parsing
		},
		ecmaVersion: 13, // Use ECMAScript 2021 syntax features
		sourceType: 'module', // Enable ECMAScript modules
	},
	plugins: [
		'@typescript-eslint', // TypeScript plugin for ESLint
		'prettier', // Prettier plugin to enforce formatting
		'react', // React plugin to lint React code
		'react-hooks', // React Hooks plugin to lint hooks usage
		'react-native', // React Native plugin for React Native-specific rules
		'jest', // Jest plugin to lint Jest tests
		'simple-import-sort', // Plugin for sorting imports and exports
	],
	rules: {
		// Prettier integration: Enforce Prettier's code style as errors
		'prettier/prettier': 'error',

		// Simple Import Sort: Enforce organized imports and exports
		'simple-import-sort/imports': 'error', // Sort imports
		'simple-import-sort/exports': 'error', // Sort exports

		// Disable conflicting rule with import sorting
		'import/order': 'off',

		// React and JSX rules
		'react/jsx-props-no-spreading': 'off', // Allow spreading props in JSX (common in React)
		'react/require-default-props': 'off', // Disable requirement for default props in React components
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function', // Enforce arrow functions for named components
				unnamedComponents: 'arrow-function', // Enforce arrow functions for unnamed components
			},
		],
		'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }], // Restrict JSX syntax to .jsx and .tsx files
		'react/react-in-jsx-scope': 'off', // Disable need to import React in React 17+ (due to automatic JSX transformation)

		// React Native-specific rules
		'react-native/no-inline-styles': 'off', // Allow inline styles in React Native (common practice)
		'react-native/split-platform-components': 2, // Enforce correct use of platform-specific components (e.g., .ios.js, .android.js)

		// TypeScript-specific rules
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_', // Ignore variables prefixed with underscore to prevent warnings
				varsIgnorePattern: '^_', // Ignore unused variables prefixed with underscore
			},
		],
		'@typescript-eslint/consistent-type-imports': [
			'warn',
			{
				prefer: 'type-imports', // Prefer type imports (e.g., `import type { X }`)
				fixStyle: 'inline-type-imports', // Style: inline type imports (no need to separate import statements)
			},
		],

		// General JavaScript rules
		'no-underscore-dangle': 'off', // Allow underscore prefix in variable names
		'no-eval': 'off', // Allow eval usage (if you decide to use eval, though it's typically discouraged)
		'no-await-in-loop': 'off', // Allow awaiting inside loops
		'no-restricted-syntax': 'off', // Disable restricted syntax rules (e.g., `for..of` loops)
		'react-native/no-raw-text': 'off', // Disable React Native's no raw text rule in Text components
		'react-native/no-color-literals': 'off', // Disable color literals rule (allow hardcoded colors)
	},
	settings: {
		// Configure module resolution for imports
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'], // Recognize these file extensions
			},
			typescript: {}, // Enable TypeScript resolver
		},
		react: {
			version: 'detect', // Automatically detect the React version in use
		},
	},
};
