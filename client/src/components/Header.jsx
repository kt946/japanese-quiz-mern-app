import React from 'react';

const Header = () => {
  return (
    <header className='bg-[#EDF2F4]'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8'>
        <a href="/">
          {/* Logo image */}
          Logo
        </a>
        {/* Login and Sign Up Links */}
        <div className='flex items-center gap-4 font-semibold'>
          <a href="/login" className='btn-transition py-2 px-4 hover:text-primaryHover'>Login</a>
          <a href="/signup" className='btn-transition py-2 px-4 text-white bg-primary hover:bg-primaryHover rounded-xl'>Sign Up</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
