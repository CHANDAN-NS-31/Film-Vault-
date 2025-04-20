import React, { useEffect, useState } from 'react';
import genreids from '../utility/genre';

function Watchlist({ watchlist, setWatchList }) {
  const [search, setsearch] = useState('');
  const [genreList, setgenreList] = useState(['All Genres']);
  const [currgenre, setcurrgenre] = useState('All Genres');

  let handlesearch = (e) => {
    setsearch(e.target.value);
  };

  let handlefilter = (genre) => {
    setcurrgenre(genre);
  };

  let sortincreasing = () => {
    let sortedincreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedincreasing]);
  };

  let sortdecreasing = () => {
    let sorteddecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sorteddecreasing]);
  };

  let sortPopularityIncreasing = () => {
    let sorted = watchlist.sort((a, b) => a.popularity - b.popularity);
    setWatchList([...sorted]);
  };

  let sortPopularityDecreasing = () => {
    let sorted = watchlist.sort((a, b) => b.popularity - a.popularity);
    setWatchList([...sorted]);
  };

  // ✅ UPDATED FUNCTION
  let handleDelete = (id) => {
    let filtered = watchlist.filter((movie) => movie.id !== id);
    setWatchList(filtered);
    localStorage.setItem('moviesApp', JSON.stringify(filtered)); // 👈 update localStorage
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => genreids[movieObj.genre_ids[0]]);
    let uniqueGenres = Array.from(new Set(temp));
    let updatedGenres = ['All Genres', ...uniqueGenres];
    if (JSON.stringify(updatedGenres) !== JSON.stringify(genreList)) {
      setgenreList(updatedGenres);
    }
  }, [watchlist]);

  return (
    <>
      <div className='flex justify-center flex-wrap m-4'>
        {genreList.map((genre, index) => {
          return (
            <div
              key={genre + index}
              onClick={() => handlefilter(genre)}
              className={
                currgenre === genre
                  ? 'flex justify-center items-center h-[3rem] w-[9rem] bg-blue-800 rounded-xl text-white font-bold mx-4'
                  : 'flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4'
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className='flex justify-center my-4'>
        <input
          onChange={handlesearch}
          value={search}
          type='text'
          placeholder='Search Movies'
          className='rounded-xl h-[3rem] w-[18rem] bg-gray-200 outline-none text-center'
        />
      </div>

      <div className='overflow-hidden rounded-lg border border-gray-200 text-center m-8'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr>
              <th>Name</th>
              <th>
                <div className='flex justify-center items-center'>
                  <div onClick={sortincreasing} className='p-2 cursor-pointer'>
                    <i className='fa-solid fa-arrow-up'></i>
                  </div>
                  <div className='p-2'>Ratings</div>
                  <div onClick={sortdecreasing} className='p-2 cursor-pointer'>
                    <i className='fa-solid fa-arrow-down'></i>
                  </div>
                </div>
              </th>
              <th>
                <div className='flex justify-center items-center'>
                  <div
                    onClick={sortPopularityIncreasing}
                    className='p-2 cursor-pointer'
                  >
                    <i className='fa-solid fa-arrow-up'></i>
                  </div>
                  <div className='p-2'>Popularity</div>
                  <div
                    onClick={sortPopularityDecreasing}
                    className='p-2 cursor-pointer'
                  >
                    <i className='fa-solid fa-arrow-down'></i>
                  </div>
                </div>
              </th>
              <th>Genre</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currgenre === 'All Genres') {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] === currgenre;
                }
              })
              .filter((movieObj) =>
                movieObj.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((movieObj) => (
                <tr key={movieObj.id} className='border-b-2'>
                  <td className='flex items-center px-6 py-4'>
                    <img
                      className='h-[6rem] w-[10rem]'
                      src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`}
                      alt={movieObj.original_title}
                    />
                    <div className='mx-10'>{movieObj.original_title}</div>
                  </td>
                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>
                    {movieObj.genre_ids
                      ?.map((id) => genreids[id])
                      .join(', ') || 'N/A'}
                  </td>
                  <td
                    onClick={() => handleDelete(movieObj.id)}
                    className='text-red-800 cursor-pointer'
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
