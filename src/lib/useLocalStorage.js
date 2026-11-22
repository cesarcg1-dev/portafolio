import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignorar errores de cuota en demos
    }
  }, [key, value]);

  const reset = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return [value, setValue, reset];
}
