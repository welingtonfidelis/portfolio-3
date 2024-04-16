export const browserStorage = () => {
  const getFromStorage = (key: string) => {
    const value = localStorage.getItem(key);

    if (value) return JSON.parse(value);

    return "";
  };

  const setOnStorage = (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const removeFromStorage = (key: string) => {
    localStorage.removeItem(key);
  };

  return { getFromStorage, setOnStorage, removeFromStorage };
};
