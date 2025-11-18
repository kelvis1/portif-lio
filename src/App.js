
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Final from './components/final';

import '@fontsource/inter';


const theme = createTheme({
  typography: {
    fontFamily: 'ui-sans-serif, system-ui, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Body />
      <Final/>
    </ThemeProvider>
    

  );
}

export default App;
