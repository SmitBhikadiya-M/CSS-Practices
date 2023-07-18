import React, { useCallback, useState } from "react";

const RenderTodos = React.memo(({ todos, addTodoHandler, removeTodoHandler }) => {

  console.log("Rendering Child Component...");

  return <>
    {
      todos && todos.length ? todos.map((todo) => {
        return <div key={todo.title}>
          {todo.title} <button onClick={() => removeTodoHandler(todo)}>Remove</button>
        </div>
      }) : <div>Not Found</div>
    }
    <br></br>
    <button onClick={() => addTodoHandler({ title: `New Todo` })}>Add Todo</button>
  </>
})

const TODOS = [{ title: 'First' }, { title: 'Second' }];

const UseCallbackDemo = () => {

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(TODOS);

  const addTodoHandler = useCallback((todo) => {
    setTodos([...todos, todo]);
  }, [todos])

  const removeTodoHandler = useCallback((todo) => {
    setTodos(todos.filter(t => t !== todo))
  }, [todos])

  console.log("Rendering Parent Component...");

  return <div>
    <h2>Todos</h2>
    <RenderTodos todos={todos} addTodoHandler={addTodoHandler} removeTodoHandler={removeTodoHandler} />
    <p>**check console logs</p>
    <hr />
    <button onClick={() => setCount(count + 1)}>INC (counter) : {count}</button>
  </div>;
};

export const UseCallbackDemoString = `
  const RenderTodos = React.memo(({ todos, addTodoHandler, removeTodoHandler }) => {

    console.log("Rendering Child Component...");

    return <>
      {
        todos && todos.length ? todos.map((todo) => {
          return <div>
            {todo.title} <button onClick={() => removeTodoHandler(todo)}>Remove</button>
          </div>
        }) : <div>Not Found</div>
      }
      <br></br>
      <button onClick={() => addTodoHandler({ title: 'New Todo' })}>Add Todo</button>
    </>
  })

  const TODOS = [{ title: 'First' }, { title: 'Second' }];

  const UseCallbackDemo = () => {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(TODOS);

    // Callback hooks are used to memorize instances of functions until their dependencies change
    const addTodoHandler = useCallback((todo) => {
      setTodos([...todos, todo]);
    }, [todos])

    const removeTodoHandler = useCallback((todo) => {
      setTodos(todos.filter(t => t !== todo))
    }, [todos])

    console.log("Rendering Parent Component...");

    return <div>
      <h2>Todos</h2>
      <RenderTodos todos={todos} addTodoHandler={addTodoHandler} removeTodoHandler={removeTodoHandler} />
      <p>**check console logs</p>
      <hr />
      <button onClick={() => setCount(count + 1)}>INC (counter) : {count}</button>
    </div>;
  };
`;

export default UseCallbackDemo;
