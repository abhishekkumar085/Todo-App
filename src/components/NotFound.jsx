import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-gray-100 flex-wrap">
        <div>
          <img
            src="https://img.freepik.com/premium-vector/404-error-page-flat-style-design-vector-illustration-stock-illustration_357500-2843.jpg?size=626&ext=jpg&ga=GA1.1.321307877.1698857475&semt=ais"
            alt="Not Found"
          />

          <Link to="/">
            {' '}
            <h2 className="text-center pt-4 font-semibold text-3xl text-blue-600">
              Navigate to Home Page
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
