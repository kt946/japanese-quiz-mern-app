import React from 'react';
import countryLogo from '../assets/JapanCountryLogo.png';

const Home = () => {
  return (
    // Hero Section with Logo and Call to Action
    <section
      id="hero"
      className="w-full min-h-[calc(100vh-72px)] py-14 bg-slate-200 hero-bg"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        {/* Call to Action */}
        <div className="flex flex-col gap-8 font-bold items-center md:items-start text-center md:text-left order-last md:order-first">
          <h1 className="text-2xl md:text-3xl shrink">
            The Easiest Way To Learn <br />
            <span className="text-primary text-6xl md:text-7xl uppercase">Japanese</span>
          </h1>
          <p className="text-xl max-w-lg">
            Explore Japanese culture and language with our engaging lessons and quizzes.
          </p>
          <div className="md:w-80 flex flex-col text-center gap-4">
            {/* Sign Up Button */}
            <a
              href="/signup"
              className="btn-transition py-3 px-6 text-white bg-primary hover:bg-secondary rounded-xl uppercase"
            >
              Start Learning
            </a>
            {/* Login Button */}
            <a
              href="/login"
              className="btn-transition py-3 px-6 text-primary border-2 border-primary bg-slate-200 hover:bg-slate-300 rounded-xl uppercase"
            >
              I Already Have An Account
            </a>
          </div>
        </div>
        {/* Country Logo */}
        <img
          src={countryLogo}
          alt="Japan Country Logo"
          className="w-[192px] h-[192px] md:w-[360px] md:h-[360px] lg:w-[480px] lg:h-[480px]"
        />
      </div>
    </section>
  );
};

export default Home;
