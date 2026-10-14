import { useEffect, useState } from "react";

const Basic = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    alert("hello");
  }, [value]);

  return (
    <div>
      <h2>Value {value}</h2>
      <button onClick={() => setValue(value + 1)}>click me</button>
    </div>
  );
};

export default Basic;
