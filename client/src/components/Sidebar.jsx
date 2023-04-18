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
      className="hidden sm:flex flex-col items-center xl:items-start fixed z-20 w-full h-full min-h-full max-w-[88px] xl:max-w-[300px] p-6 px-4 bg-white border-2 border-r-slate-300 btn-transition"
    >
      {/* Logo */}
      <NavLink
        to="/dashboard"
        className="w-fit xl:px-4 flex items-center gap-3"
      >
        <img
          src={logo}
          alt="Logo"
          className="w-10 h-10"
        />
        <img
          src={logoText}
          alt="Sakura Study Text Logo"
          className="w-auto h-6 sidebar-text"
        />
      </NavLink>

      {/* Navigation Links */}
      <nav className="w-full mt-8 flex flex-col justify-between gap-2">
        {sidebarNavItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className="sidebar-btn"
          >
            {item.icon}
            <span className="sidebar-text">{item.title}</span>
          </NavLink>
        ))}

        {/* Dark Mode Button */}
        <button
          type="button"
          className="sidebar-btn"
          onClick={() => setDarkmode(!darkmode)}
        >
          {darkmode ? <HiOutlineSun className="sidebar-btn-icon" /> : <HiOutlineMoon className="sidebar-btn-icon" />}
          <span className="sidebar-text">{darkmode ? 'Light mode' : 'Dark mode'}</span>
        </button>
        {/* Logout Button */}
        <button
          type="button"
          onClick={() => Auth.logout()}
          className="sidebar-btn"
        >
          <FiLogOut className="sidebar-btn-icon" />
          <span className="sidebar-text">Log out</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
