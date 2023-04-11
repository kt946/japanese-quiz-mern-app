import React from 'react';

const NoMatch = () => {
  return (
    <section className="w-full min-h-[calc(100vh-72px)] bg-slate-200 hero-bg flex justify-center items-center text-center">
      {/* 404 Error Message */}
      <div>
        <h1 className="text-4xl font-bold mr-4">404</h1>
        <p className="font-bold">This page could not be found.</p>
      </div>
    </section>
  );
};

export default NoMatch;
