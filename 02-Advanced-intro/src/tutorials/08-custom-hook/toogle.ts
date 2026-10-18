import { useState } from "react";

const useToggle = (defaultValue: any) => {
  const [value, setValue] = useState(defaultValue);

  const toggle = () => {
    setValue(!value);
  };

  return { value, toggle };
};

export default useToggle;
