/// <reference types="nativewind/types" />
declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.svg' {
	import { SvgProps } from 'react-native-svg';
	const content: React.FC<SvgProps>;
	export default content;
}
