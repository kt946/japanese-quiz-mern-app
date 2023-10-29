import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Auth from '../utils/auth';
// import useSelector and useDispatch hooks from react-redux to access state and dispatch actions
import { useSelector, useDispatch } from 'react-redux';
// import darkmode action
import { TOGGLE_DARKMODE } from '../features/darkMode/darkModeSlice';

import { sidebarNavItems } from '../constants/constants';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import { FiLogOut } from 'react-icons/fi';

const MobileMenu = () => {
  // get darkmode state from store
  const darkmode = useSelector((state) => state.darkMode.value);
  // get dispatch function from useDispatch hook
  const dispatch = useDispatch();
  // toggleOptions state to toggle options menu
  const [toggleOptions, setToggleOptions] = useState(false);

  return (
    // Display Mobile Menu on small screens
    <>
      {/* Background Overlay */}
      {toggleOptions && (
        <div
          onClick={() => setToggleOptions(false)}
          className="fixed inset-0 z-20 bg-[rgba(0,0,0,0.5)]"
        />
      )}

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className="sm:hidden w-full h-20 fixed z-50 bottom-0 bg-white dark:bg-slate-800 border-t-2 border-gray-300 dark:border-gray-700"
      >
        <ul className="h-full flex justify-around items-center">
          {/* Navigation Links */}
          {sidebarNavItems.map((item) => (
            <li
              key={item.title}
              onClick={() => setToggleOptions(false)}
            >
              <NavLink
                to={item.path}
                className="sidebar-btn scale-110"
              >
                {item.icon}
              </NavLink>
            </li>
          ))}
          {/* Options Button */}
          <li className="relative">
            <button
              type="button"
              className="sidebar-btn scale-110"
              onClick={() => setToggleOptions(!toggleOptions)}
            >
              <MdOutlineMoreHoriz className="sidebar-btn-icon border-2 border-slate-800 dark:border-gray-100 rounded-full" />
            </button>
            {/* Options Menu */}
            {toggleOptions && (
              <ul className="absolute z-10 bottom-full w-36 right-0 mb-6 p-1 bg-white dark:bg-slate-800 rounded-xl overflow-hidden flex flex-col gap-1 shadow-md border-2 border-gray-300 dark:border-gray-700">
                {/* Dark Mode Button */}
                <li>
                  <button
                    type="button"
                    className="mobile-btn"
                    // dispatch toggleDarkmode action when button is clicked
                    onClick={() => {
                      dispatch(TOGGLE_DARKMODE(darkmode));
                      setToggleOptions(!toggleOptions);
                    }}
                  >
                    {darkmode ? <HiOutlineSun className="h-5 w-5 mr-2" /> : <HiOutlineMoon className="h-5 w-5 mr-2" />}
                    <span>{darkmode ? 'Light' : 'Dark'}</span>
                  </button>
                </li>
                {/* Logout Button */}
                <li>
                  <button
                    type="button"
                    onClick={() => Auth.logout()}
                    className="mobile-btn"
                  >
                    <FiLogOut className="h-5 w-5 mr-2" />
                    <span>Log out</span>
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
