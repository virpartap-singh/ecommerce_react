const useLocalStorage = {
  getItem: (key: string) => {
    const data: any = localStorage.getItem(key);
    try {
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
    // return data ? JSON.parse(data) : null;
  },
  setItem: (key: string, value: any) => {
    return localStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: (key: string) => {
    return localStorage.removeItem(key);
  },
  clear: () => {
    return localStorage.clear();
  },
  key: (index: number) => {
    return localStorage.key(index);
  },
};

export default useLocalStorage;
