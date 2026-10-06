"use client";

import { useState } from "react";

export function MyButton() {
  const [count, setCount]  = useState(0)
  function handleClick() {
    setCount(count + 1)
  }


  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "blue",
          color: "white",
          border: "1px solid black",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "12px",
          margin: "10px 20px",
        }}
      >
        Click me {count}
      </button>
    </div>
  );
}
