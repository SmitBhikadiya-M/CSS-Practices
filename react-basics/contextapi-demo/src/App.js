
import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { THEMES } from './contexts/constants';
import { ThemeContext } from './contexts/themeContext';

function App() {

  const [theme, setTheme] = useState(THEMES.LIGHT);

  return (
    <div className="container">
      <ThemeContext.Provider value={ { theme, setTheme } }>
        <Header />
        <Main />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
