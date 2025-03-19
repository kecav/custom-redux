import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(
    initialValue || (() => sessionStorage.getItem(key)) || ""
  );

  useEffect(() => {
    sessionStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
};
