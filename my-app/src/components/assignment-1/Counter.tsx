"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div>
      <center>
        <p>Counter: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </center>
    </div>
  );
};

export default Counter;
