import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../constants/constants';
import Auth from '../utils/auth';

const Footer = () => {
  const loggedIn = Auth.loggedIn();

  return (
    <footer className={`${loggedIn ? 'footer-bg-light' : 'footer-bg-dark'} py-10`}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between border-t-2 border-slate-300/50 gap-8">
          {/* Copyright */}
          <p className="text-sm text-center sm:text-left">Copyright © 2023 Sakura Study. All rights reserved.</p>
          {/* Social Media Links */}
          <div className="flex flex-row flex-wrap justify-center gap-4 order-first sm:order-last">
            {socialLinks.map((link) => (
              <Link
                key={`link-${link.title}`}
                to={link.url}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
