import {useEffect, useState} from 'react';
import {DEFAULT_DEBOUNCE_DELAY} from '../constants/defaultDebounceDelay';

export const useDebounce = <T>(
  value: T,
  delay: number = DEFAULT_DEBOUNCE_DELAY,
) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
};
