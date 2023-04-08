import React from 'react';
import logo from '../assets/CampfireLogo.svg';

import { HiEye, HiEyeOff } from 'react-icons/hi';

const Signup = () => {
  return (
    // Signup Form
    <section
      id="signup"
      className="w-full min-h-[calc(100vh-72px)] py-14 flex justify-center bg-slate-200 hero-bg"
    >
      <div className="container flex justify-center">
        <form className="w-full max-w-sm h-fit flex flex-col justify-center items-center bg-white p-8 rounded-xl shadow-xl">
          <img
            src={logo}
            alt="Campfire Logo"
            className="w-12 h-12 mx-auto mb-2"
          />
          <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
          {/* Fields Container */}
          <div className="w-full flex flex-col gap-4">
            {/* Name Field Wrapper*/}
            <div className="flex flex-col gap-1">
              <label
                className="font-bold"
                for="name"
              >
                Name
              </label>
              <input
                className="px-3 py-2 bg-slate-100 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
              />
            </div>
            {/* Email Field Wrapper*/}
            <div className="flex flex-col gap-1">
              <label
                className="font-bold"
                for="email"
              >
                Email
              </label>
              <input
                className="px-3 py-2 bg-slate-100 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
              />
            </div>
            {/* Password Field Wrapper */}
            <div className="relative w-full flex flex-col gap-1">
              <label
                className="font-bold"
                for="password"
              >
                Password
              </label>
              <div className="flex">
                <input
                  className="w-full px-3 py-2 pr-12 bg-slate-100 border border-gray-300 rounded-xl focus:outline-none focus:border-primary overflow-hidden"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="********"
                />
                {/* Show password button */}
                <button className="absolute right-0 btn-transition m-[1px] px-3 py-3 rounded-r-xl hover:bg-slate-200">
                  <HiEye />
                </button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="w-full mt-6 py-3 px-6 bg-primary hover:bg-secondary btn-transition text-white font-bold rounded-xl "
            type="submit"
          >
            Create Account
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
