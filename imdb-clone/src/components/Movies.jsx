import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
import Pagination from './pagination';


function Movies({handleAddtoWatchList , handleRemoveFromWatchList,Watchlist}) {
  const [movies, setMovies] = useState([]);
  const [PageNo, setPageNo] = useState(1);

  // Handle Previous Button Click
  const handlePrev = () => {
    if (PageNo > 1) {  // Prevent PageNo from going below 1
      setPageNo(PageNo - 1);
    }
  };

  // Handle Next Button Click
  const handleNext = () => {
    setPageNo(PageNo + 1);
  };

  // Fetch movies when PageNo changes
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=97b68330b365e5c7153c678d00ef6fb9&language=en-US&page=${PageNo}`)
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, [PageNo]);  // Add PageNo as dependency

  return (
    <div className='p-5'>
      <div className='text-2xl text-center w-full m-5 font-bold'>
        Trending Movies
      </div>

      <div className='flex flex-row flex-wrap justify-around'>
        {movies.map((movieObj) => {
          // Pass the 'poster_path' and 'name' to the MovieCard component
        return <MovieCard movieObj={movieObj} key={movieObj.id} poster_path={movieObj.poster_path} name={movieObj.original_title}handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} Watchlist={Watchlist} />;
        })}
      </div>
      
      {/* Pass PageNo, handleNext, and handlePrev as props */}
      <Pagination PageNo={PageNo} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
}

export default Movies;
