import React, { useReducer } from "react";

const intialState = [
  {
    text: 'Buy a book',
    status: 'New'
  },
  {
    text: 'Take a rest',
    status: 'In Progress'
  }
]

const reducer = (state, action) => {
  switch(action.type){
    case 'updateStatus':
      const todo = state.find(todo=>todo===action.todo);
      console.log(todo, action.status);
      todo.status = action.status;
      return [...state];
    case 'add':
      return [...state, action.todo];
    case 'remove':
      return state.filter(todo=>todo!==action.todo);
    default:
      return state;
  }
}

const UseReducerDemo = () => {


  const [todos, dispatch] = useReducer(reducer, intialState); 

  return <div>
    <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <div key={index}>
            <p>{todo.text}</p>
            <select value={todo.status} onChange={(e)=>dispatch({ type: 'updateStatus', todo, status: e.target.value })}>
              <option value={'New'}>New</option>
              <option value={'InProgress'}>In Progres</option>
              <option value={'Complete'}>Complete</option>
            </select>
            <button onClick={()=>dispatch({ type: 'remove', todo })}>Remove</button>
          </div>;
        })}<br></br>
        <button onClick={()=>dispatch({ type: 'add', todo: { text: 'Lunch', status: 'New' } })}>Add Todo</button>
      </div>
  </div>;
};

export const UseReducerDemoString = `
  const intialState = [
    {
      text: 'Buy a book',
      status: 'New'
    },
    {
      text: 'Take a rest',
      status: 'In Progress'
    }
  ]

  const reducer = (state, action) => {
    switch(action.type){
      case 'updateStatus':
        const todo = state.find(todo=>todo===action.todo);
        console.log(todo, action.status);
        todo.status = action.status;
        return [...state];
      case 'add':
        return [...state, action.todo];
      case 'remove':
        return state.filter(todo=>todo!==action.todo);
      default:
        return state;
    }
  }

  const UseReducerDemo = () => {


    const [todos, dispatch] = useReducer(reducer, intialState); 

    return <div>
      <div>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <div key={index}>
              <p>{todo.text}</p>
              <select value={todo.status} onChange={(e)=>dispatch({ type: 'updateStatus', todo, status: e.target.value })}>
                <option value={'New'}>New</option>
                <option value={'InProgress'}>In Progres</option>
                <option value={'Complete'}>Complete</option>
              </select>
              <button onClick={()=>dispatch({ type: 'remove', todo })}>Remove</button>
            </div>;
          })}<br></br>
          <button onClick={()=>dispatch({ type: 'add', todo: { text: 'Lunch', status: 'New' } })}>Add Todo</button>
        </div>
    </div>;
  };
`;

export default UseReducerDemo;
