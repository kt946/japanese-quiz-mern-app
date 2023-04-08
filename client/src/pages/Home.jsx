import React from 'react';
import countryLogo from '../assets/JapanCountryLogo.png';

const Home = () => {
  return (
    // Hero Section with Logo and Call to Action
    <section
      id="hero"
      className="w-full min-h-[calc(100vh-72px)] py-14 bg-slate-200 hero-bg"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Call to Action */}
        <div className="flex flex-col items-center lg:items-start font-bold text-center lg:text-left gap-8 order-last lg:order-first">
          <h1 className="text-xl md:text-2xl lg:text-3xl uppercase">
            The Best Way To Learn <br />
            <span className="text-primary text-5xl md:text-6xl lg:text-7xl">Japanese</span>
          </h1>
          <p className="max-w-md md:text-xl text-[#4D516D]">
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
          className="w-48 h-48 md:w-80 md:h-80 lg:w-[480px] lg:h-[480px]"
        />
      </div>
    </section>
  );
};

export default Home;
