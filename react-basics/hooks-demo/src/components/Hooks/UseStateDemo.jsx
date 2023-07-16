import { useState } from "react";
import { styled } from "styled-components";

let intialState = 0;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 400px;
  gap: 4px;
`;

const UseStateDemo = () => {
  const [count, setCount] = useState(intialState);

  function experimentOne() {
    setCount((prev) => intialState);
    setTimeout(() => setCount((prev) => prev + 2), 2000);
    setCount((prev) => prev + 3);
  }

  function experimentTwo() {
    setCount(count + intialState);
    setTimeout(() => setCount(count + 2), 2000);
    setCount(count + 3);
  }

  function increment(by = 1) {
    setCount(count + by);
  }

  return (
    <>
      <div>
        <h2>Counter : {count}</h2>
      </div>
      <Div>
        <button onClick={() => setCount(intialState)}>Reset</button>
        <button onClick={() => experimentOne()}>Experiment One</button>
        <button onClick={() => experimentTwo()}>Experiment Two</button>
        <button onClick={() => increment()}>INC (+1)</button>
        <button onClick={() => increment(5)}>INC (+5)</button>
        <button onClick={() => increment(-5)}>DEC (-5)</button>
      </Div>
    </>
  );
};

export const UseStateDemoAsString = `
    let intialState = 0;
    const UseStateDemo = () => {
      const [count, setCount] = useState(intialState);
      
      function experimentOne() {
        setCount((prev) => intialState);
        setTimeout(() => setCount((prev) => prev + 2), 2000);
        setCount((prev) => prev + 3);
      }

      function experimentTwo() {
        setCount(count + intialState);
        setTimeout(() => setCount(count + 2), 2000);
        setCount(count + 3);
      }

      function increment(by = 1) {
        setCount(count + by);
      }

      return (
        <>
          <div>
            <h2>Counter : {count}</h2>
          </div>
          <div>
            <button onClick={() => setCount(intialState)}>Reset</button>
            <button onClick={() => experimentOne()}>Experiment One</button>
            <button onClick={() => experimentTwo()}>Experiment Two</button>
            <button onClick={() => increment()}>INC (+1)</button>
            <button onClick={() => increment(5)}>INC (+5)</button>
            <button onClick={() => increment(-5)}>DEC (-5)</button>
          </div>
        </>
      );
    };
`;

export default UseStateDemo;
