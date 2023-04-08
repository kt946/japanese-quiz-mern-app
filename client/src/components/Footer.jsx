import React from 'react';
import { FaGithub, FaFacebook, FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2B2D42] text-slate-300 py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between border-t border-slate-300/40 gap-8">
          {/* Copyright */}
          <p className="text-sm text-center sm:text-left">Copyright © 2023 Kanji Camp. All rights reserved.</p>
          {/* Social Media Links */}
          <div className="flex flex-row gap-4 order-first sm:order-last">
            <a href="https://github.com/">
              <FaGithub className="w-8 h-8 btn-transition hover:text-white" />
            </a>
            <a href="https://discord.com/">
              <FaDiscord className="w-8 h-8 btn-transition hover:text-white" />
            </a>
            <a href="https://www.facebook.com">
              <FaFacebook className="w-8 h-8 btn-transition hover:text-white" />
            </a>
            <a href="https://twitter.com/">
              <FaTwitter className="w-8 h-8 btn-transition hover:text-white" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram className="w-8 h-8 btn-transition hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
