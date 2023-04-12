import React from 'react';
import Auth from '../utils/auth';

const Sidebar = () => {
  return (
    <aside
      id="sidebar"
      className="fixed z-20 w-full h-full min-h-full max-w-xs p-6 bg-slate-400 flex flex-col justify-between"
    >
      <nav>Sidebar</nav>
      <button
        type="button"
        onClick={() => Auth.logout()}
        className="btn-transition py-2 px-4 text-white bg-primary hover:bg-primary-shade rounded-xl font-bold"
      >
        Log out
      </button>
    </aside>
  );
};

export default Sidebar;
