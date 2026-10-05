"use client";

export function MyButton() {
  function handleClick() {
    alert("Button clicked!");
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
        Click me
      </button>
    </div>
  );
}
