import React, { useEffect, useState } from 'react';
import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner"; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  let [watchlist, setWatchList] = useState([]);

  // Add movie to watchlist
  let handleAddtoWatchList = (movieObj) => {
    let newWatchList = [...watchlist, movieObj];
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList)); // Save to localStorage
    setWatchList(newWatchList);
    console.log(newWatchList);
  };

  // Remove movie from watchlist
  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => movie.id !== movieObj.id);
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchlist)); // Update localStorage
    setWatchList(filteredWatchlist);
  };

  // Load watchlist from localStorage once on initial render
  useEffect(() => {
    let moviesfromlocalstorage = localStorage.getItem('moviesApp');
    if (moviesfromlocalstorage) {
      setWatchList(JSON.parse(moviesfromlocalstorage));
    }
  }, []); // ✅ Only run once

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Banner />
              <Movies
                Watchlist={watchlist}
                handleAddtoWatchList={handleAddtoWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            </>
          }
        />
        <Route path='/watchlist' element={<Watchlist watchlist={watchlist} setWatchList={setWatchList} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
