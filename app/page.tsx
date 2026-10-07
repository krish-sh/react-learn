"use client"

import  MyButton  from "./components/button";
import { User } from "./components/user";
import { Products } from "./components/map-function";
import { useState } from "react";


  const today = new Date()


// props Example with the button clicked
export default function Home() {
  const [count, setCount] = useState(0);

  function formatData(date: any){
    return new Intl.DateTimeFormat(
      'en-US',
      {weekday: 'long'}
    ).format(date)
  }

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>
        <User />
      </div>
      <p>Date: {formatData(today)}</p>
      <MyButton onClick={handleClick} count={count} />
      <MyButton onClick={handleClick} count={count} />
      <Products />
    </div>
  );
}
