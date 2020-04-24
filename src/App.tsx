import React from 'react';  
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePesistedState from './utils/usePesistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyles from './styles/global';
import Header from './components/Header';


function App() {
  const [theme, setTheme] = usePesistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme} >
      <div className="App">
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>

  );
}

export default App;