import React from 'react';

function Banner() {
  return (
    <div className='h-[20vh] md:h-[70vh] flex items-end bg-center bg-cover' 
         style={{ backgroundImage: `url(https://th.bing.com/th/id/R.065e8e1168628ac91274b43f7ca1549a?rik=FkWcUBzXlzbb7A&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fO1t26Hb.jpg&ehk=z1mH9UOR86xKkIFsznjZHnI2TmJH%2f4oz6kGUpAClRpM%3d&risl=&pid=ImgRaw&r=0` }}>
      <div className='text-white text-2xl text-center w-full bg-blue-900/60'>
        Avengers
      </div>
    </div>
  );
}

export default Banner;
