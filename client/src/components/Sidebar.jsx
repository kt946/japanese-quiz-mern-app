import { NavLink } from 'react-router-dom';
import Auth from '../utils/auth';
// import useSelector and useDispatch hooks from react-redux to access state and dispatch actions
import { useSelector, useDispatch } from 'react-redux';
// import darkmode action
import { TOGGLE_DARKMODE } from '../features/darkMode/darkModeSlice';

import logo from '../assets/SakuraStudyLogo.svg';
import logoText from '../assets/SakuraStudyTextBlack.svg';
import logoTextDarkMode from '../assets/SakuraStudyTextWhite.svg';
import { sidebarNavItems } from '../constants/constants';
import { FiLogOut } from 'react-icons/fi';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

const Sidebar = () => {
  // get darkmode state from store
  const darkMode = useSelector((state) => state.darkMode.value);
  // get dispatch function from useDispatch hook
  const dispatch = useDispatch();

  return (
    <aside
      id="sidebar"
      className="hidden sm:flex flex-col items-center xl:items-start fixed z-30 w-full h-full min-h-full max-w-[88px] xl:max-w-[300px] p-6 px-4 bg-white dark:bg-slate-800 border-r-2 border-gray-300 dark:border-gray-700"
    >
      {/* Logo */}
      <NavLink
        to="/dashboard"
        className="w-fit xl:px-4 flex items-center gap-3 hover:opacity-70"
      >
        <img
          src={logo}
          alt="Logo"
          className="w-10 h-10"
        />
        {/* Show dark mode logo if dark mode is enabled */}
        {darkMode ? (
          <img
            src={logoTextDarkMode}
            alt="Sakura Study Text Logo"
            className="w-auto h-6 sidebar-text"
          />
        ) : (
          <img
            src={logoText}
            alt="Sakura Study Text Logo"
            className="w-auto h-6 sidebar-text"
          />
        )}
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
          // dispatch toggleDarkmode action when button is clicked
          onClick={() => dispatch(TOGGLE_DARKMODE(darkMode))}
        >
          {darkMode ? <HiOutlineSun className="sidebar-btn-icon" /> : <HiOutlineMoon className="sidebar-btn-icon" />}
          <span className="sidebar-text">{darkMode ? 'Light mode' : 'Dark mode'}</span>
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
