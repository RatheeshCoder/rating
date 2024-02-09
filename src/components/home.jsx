import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-3xl font-bold">Welcome to the Home Page</h1>
      <Link to="/rating">
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Rating
        </button>
      </Link>
    </div>
  );
}

export default Home;
