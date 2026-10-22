import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        {" "}
        Click to count {count}
      </button>
    </div>
  );
};

export default Count;
