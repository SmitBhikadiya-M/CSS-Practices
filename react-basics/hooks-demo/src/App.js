import './App.css';
import Header from './components/Header/Header';
import Container from './components/Container';
import Main from './components/Main/Main';
import { useState } from 'react';

function App() {
  return (
    <Container>
      <Header />
      <Main code={`function MyCmp(){
          const [count, setCount] = useState(0);
          return <>
            <div>Count : { count }</div>
            <button onClick={()=>setCount(count+1)}>INC</button>
          </>
        }`} explanationCMP={
          <pre>

          </pre>
        } hookName={'useState'} />
    </Container>
  );
}

export default App;

