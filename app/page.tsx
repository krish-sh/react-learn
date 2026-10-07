"use client"

import  MyButton  from "./components/button";
import { User } from "./components/user";
import { Products } from "./components/map-function";
import { useState } from "react";


// props Example with the button clicked
export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>
        <User />
      </div>
      <h1>Hello</h1>
      <MyButton onClick={handleClick} count={count} />
      <MyButton onClick={handleClick} count={count} />
      <Products />
    </div>
  );
}
