import './App.css';

// import axios from 'axios';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import IndividualMovie from './pages/IndividualMovie/IndividualMovie';
import useLocalStorage from 'use-local-storage';
import Footer from './components/Footer/Footer';

import { getRequestParams, getDataFromAPI } from './helpers/utils';

export const ThemeContext = createContext(null)

function App() {

  // states for page theme
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');
  // function that implements ability to toggle page theme
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }

  // states for data retrieved from API
  const [details, setDetails] = useState(null);
  // setting the request params for each of the API endpoints
  const detailsParams = getRequestParams('https://api.themoviedb.org/3/configuration');
  // this runs functions to get all necessary data from the API as useEffect
  useEffect(() => {
    getDataFromAPI(detailsParams, setDetails);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // wait until all API requests are fulfilled to continue
  if (!details) {
      return
  }
  // save imageBaseUrl to local storage
  localStorage.setItem('imagesBaseUrl', `${details.images.secure_base_url}original`);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <div className='App' data-theme={theme}>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/movies/:movieId" element={<IndividualMovie theme={theme} />} />
          </Routes>
          <Footer theme={theme} />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
