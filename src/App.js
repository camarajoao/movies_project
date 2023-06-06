import './App.css';

// import axios from 'axios';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import IndividualMovie from './pages/IndividualMovie/IndividualMovie';
import useLocalStorage from 'use-local-storage';

export const ThemeContext = createContext(null)

function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <div className='App' data-theme={theme}>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<IndividualMovie theme={theme} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
