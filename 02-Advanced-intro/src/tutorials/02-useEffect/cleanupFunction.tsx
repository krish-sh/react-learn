import React, { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle component</button>
      {toggle && <Random />}
    </div>
  );
};

const Random = () => {
  useEffect(() => {
    const scroolEvent = () => {
      // some fun
    };

    window.addEventListener("scroll", scroolEvent);
    return () => {
      window.removeEventListener("scroll", scroolEvent);
    };
  }, []);
  return <h2>Hello there</h2>;
};

export default CleanupFunction;
