import React, { useMemo, useState } from "react";

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  console.log("Calculated: " + num);
  return num;
};

const UseMemoDemo = () => {

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  /*  The expensive calculations will only be executed and return 
        updated value when the count is updated else return a old value */
  const calculation = useMemo(()=>expensiveCalculation(count), [count]);

  const increment = () => {
    setCount(count+1);
  };
  const addTodo = () => {
    setTodos((todos) => [...todos, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

export const UseMemoDemoString = `
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    console.log("Calculated: " + num);
    return num;
  };

  const UseMemoDemo = () => {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    /*  The expensive calculations will only be executed and return 
        updated value when the count is updated else return a old value */
    const calculation = useMemo(()=>expensiveCalculation(count), [count]);

    const increment = () => {
      setCount(count+1);
    };
    const addTodo = () => {
      setTodos((todos) => [...todos, "New Todo"]);
    };

    return (
      <div>
        <div>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
          <h2>Expensive Calculation</h2>
          {calculation}
        </div>
      </div>
    );
  };
`;

export default UseMemoDemo;
