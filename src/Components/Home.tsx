import React from 'react';
import Navbar from './Navbar';
import HomeCarousel from './HomeCarousel';

const Home = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gray-100">
      <Navbar />

      <div
        className="min-h-[90vh] m-w-screen border-1 border-red-300 flex "
        style={
          {
            // backgroundImage:
          }
        }
      >
        {/* <div className="w-20 h-[90vh] border-2 border-red-500"></div> */}
        <HomeCarousel />
      </div>
    </div>
  );
};

export default Home;
