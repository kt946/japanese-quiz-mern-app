import React from 'react';
import logo from '../assets/CampfireLogo.svg';

const Header = () => {
  return (
    <header className="bg-[#EDF2F4]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo image */}
        <a href="/">
          <img
            src={logo}
            alt="campfire logo"
            className="w-10 h-10 btn-transition hover:brightness-[1.15]"
          />
        </a>
        {/* Login and Sign Up Links */}
        <div className="flex items-center gap-4 font-bold">
          <a
            href="/login"
            className="btn-transition py-2 px-4 hover:text-secondary"
          >
            Login
          </a>
          <a
            href="/signup"
            className="btn-transition py-2 px-4 text-white bg-primary hover:bg-secondary rounded-xl"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
