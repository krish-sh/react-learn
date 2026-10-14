import { useEffect, useState } from "react";

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("This is first value");
  }, [value]);

  useEffect(() => {
    console.log("This is second value");
  }, [count]);

  return (
    <div>
      <div>
        <h2>Value {value}</h2>
        <button onClick={() => setValue(value + 1)}>click me</button>
      </div>
      <div>
        <h2>Second Value {count}</h2>
        <button onClick={() => setCount(count + 1)}>click me</button>
      </div>
    </div>
  );
};

export default MultipleEffects;
