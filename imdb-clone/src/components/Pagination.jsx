import React from 'react';

function Pagination({ PageNo, handleNext, handlePrev }) {
  return (
    <div className='bg-gray-400 p-4 mt-8 flex justify-center '>
      <div onClick={handlePrev} className='px-8 cursor-pointer'>
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className='text-bold'>{PageNo}</div>
      <div onClick={handleNext} className='px-8 cursor-pointer'>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
