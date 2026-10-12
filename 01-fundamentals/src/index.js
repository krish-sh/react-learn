import React from "react";
import ReactDOM from "react-dom/client";
import Book from "./components/book.js";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="title">Amazon Best Seller</h1>
      <Book />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
