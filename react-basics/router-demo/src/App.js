import './App.css';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/blog'}>Blog</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<h1>Home</h1>} />
            <Route path='/about' element={<h1>About</h1>} />
            <Route path='/blog' element={<h1>Blog</h1>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
