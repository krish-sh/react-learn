"use client";

import { useState } from "react";

type buttonType = {
  onClick: () => void;
  count: number;
};

export default function MyButton({ onClick, count }: buttonType) {
  return (
    <div>
      <button
        onClick={onClick}
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
        Click {count}
      </button>
    </div>
  );
}
