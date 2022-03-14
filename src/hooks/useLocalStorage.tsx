import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

type UseStorageReturnType<T> = [T, Dispatch<SetStateAction<T>>, () => void];

export function useLocalStorage<T>(
  key: string,
  defaultValue: T
): UseStorageReturnType<T> {
  return useStorage(key, defaultValue, window.localStorage);
}

function useStorage<T>(
  key: string,
  defaultValue: T,
  storageObject: any
): UseStorageReturnType<T> {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);

    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return defaultValue();
    }

    return defaultValue as T;
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}
