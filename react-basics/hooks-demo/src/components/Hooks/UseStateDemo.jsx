import { useState } from "react";

const UseStateDemo = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Count : {count}</div>
      <button onClick={() => setCount(count + 1)}>INC</button>
    </>
  );
};

export const UseStateDemoAsString = `
  const UseStateDemo = () => {
    const [count, setCount] = useState(0);
    return (
      <>
        <div>Count : {count}</div>
        <button onClick={() => setCount(count + 1)}>INC</button>
      </>
    );
  };
`;

export default UseStateDemo;
