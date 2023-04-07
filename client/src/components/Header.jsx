import React from 'react';
import logo from '../assets/CampfireLogo.svg';
import logoText from '../assets/LogoTextBlack.svg';

const Header = () => {
  return (
    <header className="bg-[#EDF2F4] z-50">
      <nav className="mx-auto max-w-7xl flex items-center justify-between p-4 lg:px-8">
        {/* Logo image */}
        <a
          href="/"
          className="flex items-center gap-3 btn-transition hover:opacity-80"
        >
          <img
            src={logo}
            alt="Kanji Camp Logo"
            className="w-10 h-10"
          />
          <img
            src={logoText}
            alt="Kanji Camp Full Logo"
            className="w-auto h-6 hidden sm:inline-block"
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
