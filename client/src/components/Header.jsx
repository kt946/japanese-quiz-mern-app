import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import logo from '../assets/SakuraStudyLogo.svg';
import logoText from '../assets/SakuraStudyTextBlack.svg';

const Header = () => {
  // check the logged in status of a user; returns true if logged in
  const loggedIn = Auth.loggedIn();

  return (
    <header className="bg-white z-50">
      <nav className="mx-auto max-w-7xl flex items-center justify-between p-4 lg:px-8">
        {/* Logo image */}
        <Link
          to="/"
          className="flex items-center gap-3 btn-transition"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10"
          />
          <img
            src={logoText}
            alt="Sakura Study Text Logo"
            className="w-auto h-6 hidden sm:inline-block"
          />
        </Link>
        {/* Login and Sign Up Links */}
        <div className="flex items-center gap-4 font-bold">
          <Link
            to="/login"
            className="btn-transition py-2 px-4 hover:text-primary-shade"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="btn-transition py-2 px-4 text-white bg-primary hover:bg-primary-shade rounded-xl"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
