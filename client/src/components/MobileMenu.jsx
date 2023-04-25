import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Auth from '../utils/auth';

import { sidebarNavItems } from '../constants/constants';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import { FiLogOut } from 'react-icons/fi';

const MobileMenu = () => {
  const [darkmode, setDarkmode] = useState(false);
  const [toggleOptions, setToggleOptions] = useState(false);

  return (
    // Display Mobile Menu on small screens
    <div
      id="mobileMenu"
      className="sm:hidden btn-transition w-full h-20 fixed z-50 bottom-0 bg-white border-t-2 border-gray-300"
    >
      <ul className="h-full flex justify-around items-center">
        {/* Navigation Links */}
        {sidebarNavItems.map((item) => (
          <li key={item.title}>
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
            <MdOutlineMoreHoriz className="sidebar-btn-icon border-2 border-slate-800 rounded-full" />
          </button>
          {/* Options Menu */}
          {toggleOptions && (
            <ul className="absolute bottom-full w-36 right-0 mb-6 p-1 bg-white rounded-xl overflow-hidden flex flex-col gap-1 shadow-md ring-2 ring-gray-300">
              {/* Dark Mode Button */}
              <li>
                <button
                  type="button"
                  className="mobile-btn"
                  onClick={() => {
                    setDarkmode(!darkmode);
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
  );
};

export default MobileMenu;
