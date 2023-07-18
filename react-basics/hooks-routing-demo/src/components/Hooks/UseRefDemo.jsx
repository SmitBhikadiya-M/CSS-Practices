import React, { useRef, useState, useEffect } from "react";

const UseRefDemo = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const countRef = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
    countRef.current.querySelector("span").innerText = count.current;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Render Count: {count.current}</h2>
      <h3 ref={countRef}>Render Count: <span></span></h3>
    </>
  );
};

export const UseRefDemoString = `
  const UseRefDemo = () => {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    const countRef = useRef(0);

    useEffect(() => {
      count.current = count.current + 1;
      countRef.current.querySelector("span").innerText = count.current;
    });

    return (
      <>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h2>Render Count: {count.current}</h2>
        <h3 ref={countRef}>Render Count: <span></span></h3>
      </>
    );
  };
`;

export default UseRefDemo;
