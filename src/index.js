import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "2rem"
    },
    h2: {
      fontSize: "1.75rem"
    },
    h3: {
      fontSize: "1.35rem"
    },
    h4: {
      fontSize: "1.25rem",
      fontVariant: "small-caps"
    },
    h6: {
      fontSize: "1.05rem",
      fontStyle: "italic"
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
