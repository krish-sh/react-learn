import { useState } from "react";

const UseStateBasic = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>UseStateBasic</div>
      <button onClick={() => setCount(count + 1)}>Click me {count}</button>
    </>
  );
};

export default UseStateBasic;
