import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import logo from '../assets/SakuraStudyLogo.svg';
import logoText from '../assets/SakuraStudyTextBlack.svg';

import { sidebarNavItems } from '../constants/constants';
import { FiLogOut } from 'react-icons/fi';
import { HiOutlineMoon } from 'react-icons/hi';

const Sidebar = () => {
  return (
    <aside
      id="sidebar"
      className="fixed z-20 w-full h-full min-h-full max-w-xs p-6 flex flex-col transition-all ease-in duration-300 bg-white border-2 border-r-primary"
    >
      {/* Logo */}
      <Link
        to="/dashboard"
        className="w-fit flex items-center gap-3"
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

      {/* Navigation Links */}
      <nav className="mt-8 flex flex-col justify-between gap-2">
        {sidebarNavItems.map((item) => (
          <Link
            key={item.title}
            to={item.path}
            className="sidebar-btn"
          >
            {item.icon}
            {item.title}
          </Link>
        ))}

        {/* Dark Mode Button */}
        <button
          type="button"
          className="sidebar-btn"
        >
          <HiOutlineMoon className="sidebar-btn-icon" />
          Dark mode
        </button>
        {/* Logout Button */}
        <button
          type="button"
          onClick={() => Auth.logout()}
          className="sidebar-btn"
        >
          <FiLogOut className="sidebar-btn-icon" />
          Log out
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
