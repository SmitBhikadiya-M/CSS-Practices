import './App.css';
import { useState } from 'react'
import UsingUseForm from './forms/UsingUseForm';
import UsingUseState from './forms/UsingUseState';

function App() {

  const [show, setShow] = useState(true);

  return <>
    {show ? <UsingUseForm /> : <UsingUseState />}
  </>
}

export default App;
