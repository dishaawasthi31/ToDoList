import React, { useState } from 'react';
import TodoMain from './components/TodoMain';
import './App.scss'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function App() {
  const [toggleDark, settoggleDark] = useState(false);
  const myTheme = createMuiTheme({

    // Theme settings
    palette: {
      type: toggleDark ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={myTheme}>
      <div className='main-container'>
        <TodoMain toggleDark={toggleDark} settoggleDark={settoggleDark} />
      </div>
    </ThemeProvider>

  );
}

export default App;
