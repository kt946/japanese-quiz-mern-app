import React from 'react';

import Auth from '../utils/auth';

const NoMatch = () => {
  const loggedIn = Auth.loggedIn();

  return (
    <section
      className={`w-full ${
        loggedIn ? 'min-h-screen' : 'min-h-[calc(100vh-72px)] hero-bg'
      } flex justify-center items-center text-center`}
    >
      {/* 404 Error Message */}
      <div>
        <h1 className="text-4xl font-bold mr-4">404</h1>
        <p className="font-bold">This page could not be found.</p>
      </div>
    </section>
  );
};

export default NoMatch;
