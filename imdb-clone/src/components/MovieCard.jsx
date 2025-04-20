import React from 'react';

function MovieCard({ movieObj, poster_path, name, handleAddtoWatchList, handleRemoveFromWatchList, Watchlist }) {
  // Check if movie exists in Watchlist
  function doesContain(movieObj) {
    return Watchlist.some(movie => movie.id === movieObj.id);
  }

  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const imageUrl = poster_path ? `${baseUrl}${poster_path}` : 'https://via.placeholder.com/200x300';

  return (
    <div
      className='h-[60vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-end items-center m-2'
      style={{ backgroundImage: `url(${imageUrl})` }}>

      {
        doesContain(movieObj) ? (
          <div
            onClick={() => handleRemoveFromWatchList(movieObj)}
            className="m-4 flex justify-center items-center h-8 w-8 rounded-lg bg-gray-900/60 cursor-pointer text-white"
          >
            &#10060;
          </div>
        ) : (
          <div
            onClick={() => handleAddtoWatchList(movieObj)}
            className="m-4 flex justify-center items-center h-8 w-8 rounded-lg bg-gray-900/60 cursor-pointer text-white"
          >
            &#128525;
          </div>
        )
      }

      <div className='text-white text-xl w-full p-2 text-center bg-gray-900/60'>
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
