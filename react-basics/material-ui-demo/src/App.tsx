import React from 'react';
import logo from './logo.svg';
import './App.css';
import MYButton from './componments/Button'
import HomeMini from '@mui/icons-material/HomeMini'

function App() {
  return (
    <div className="App">
      <MYButton varient='contained' children={'Button'} icon={{ endIcon: <HomeMini /> }}></MYButton>
    </div>
  );
}

export default App;
