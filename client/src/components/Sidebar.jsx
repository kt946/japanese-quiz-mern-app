import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Auth from '../utils/auth';
import logo from '../assets/SakuraStudyLogo.svg';
import logoText from '../assets/SakuraStudyTextBlack.svg';

import { sidebarNavItems } from '../constants/constants';
import { FiLogOut } from 'react-icons/fi';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

const Sidebar = () => {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <aside
      id="sidebar"
      className="fixed z-20 w-full h-full min-h-full max-w-xs p-6 flex flex-col transition-all ease-in duration-300 bg-white border-2 border-r-slate-300"
    >
      {/* Logo */}
      <NavLink
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
      </NavLink>

      {/* Navigation Links */}
      <nav className="mt-8 flex flex-col justify-between gap-2">
        {sidebarNavItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className="sidebar-btn"
          >
            {item.icon}
            {item.title}
          </NavLink>
        ))}

        {/* Dark Mode Button */}
        <button
          type="button"
          className="sidebar-btn"
          onClick={() => setDarkmode(!darkmode)}
        >
          {darkmode ? <HiOutlineSun className="sidebar-btn-icon" /> : <HiOutlineMoon className="sidebar-btn-icon" />}
          {darkmode ? 'Light mode' : 'Dark mode'}
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
