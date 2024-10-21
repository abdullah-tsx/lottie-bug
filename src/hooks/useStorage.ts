import { useEffect, useState } from 'react';
import { MMKV } from 'react-native-mmkv';

// Initialize MMKV instance
const storage = new MMKV();

type UseMMKVReturn<T> = {
	value: T | null;
	setValue: (key: string, newValue: T) => void;
	getValue: (key: string) => T | null;
	removeValue: (key: string) => void;
};

export const useStorage = <T>(
	key: string,
	initialValue: T | null = null,
): UseMMKVReturn<T> => {
	const [value, setStoredValue] = useState<T | null>(() => {
		const storedValue = storage.getString(key);
		return storedValue ? (JSON.parse(storedValue) as T) : initialValue;
	});

	useEffect(() => {
		if (value !== null) {
			storage.set(key, JSON.stringify(value));
		}
	}, [key, value]);

	// Set value in MMKV
	const setValue = (key: string, newValue: T) => {
		setStoredValue(newValue);
		storage.set(key, JSON.stringify(newValue));
	};

	// Get value from MMKV
	const getValue = (key: string): T | null => {
		const storedValue = storage.getString(key);
		return storedValue ? (JSON.parse(storedValue) as T) : null;
	};

	// Remove value from MMKV
	const removeValue = (key: string) => {
		setStoredValue(null);
		storage.delete(key);
	};

	return {
		value,
		setValue,
		getValue,
		removeValue,
	};
};
