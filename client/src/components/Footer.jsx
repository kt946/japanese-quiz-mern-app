import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../constants/constants';

const Footer = () => {
  return (
    <footer className="bg-[#2B2D42] text-slate-300 py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between border-t border-slate-300/40 gap-8">
          {/* Copyright */}
          <p className="text-sm text-center sm:text-left">Copyright © 2023 Sakura Study. All rights reserved.</p>
          {/* Social Media Links */}
          <div className="flex flex-row flex-wrap justify-center gap-4 order-first sm:order-last">
            {socialLinks.map((link) => (
              <Link
                key={`link-${link.name}`}
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
