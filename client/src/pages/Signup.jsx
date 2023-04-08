import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/CampfireLogo.svg';
import { HiEye, HiEyeOff } from 'react-icons/hi';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section
      id="signup"
      className="w-full min-h-[calc(100vh-72px)] py-14 flex justify-center bg-slate-200 hero-bg"
    >
      {/* Sign Up Form */}
      <form className="w-full max-w-sm h-fit flex flex-col justify-center items-center bg-white p-8 rounded-xl shadow-xl">
        <img
          src={logo}
          alt="Campfire Logo"
          className="w-12 h-12 mx-auto mb-2"
        />
        <h1 className="text-2xl font-bold mb-6 text-center">Sign up</h1>
        {/* Fields Container */}
        <div className="w-full flex flex-col gap-4">
          {/* Username Field Wrapper*/}
          <div className="flex flex-col gap-1">
            <label
              className="font-bold"
              for="username"
            >
              Username
            </label>
            <input
              className="px-3 py-2 bg-slate-100 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
              type="text"
              id="username"
              name="username"
              placeholder="John Doe"
              required
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
              required
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
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="********"
                required
              />
              {/* Show password button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 btn-transition m-[1px] px-3 py-3 rounded-r-xl hover:bg-slate-200"
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          className="w-full my-6 py-3 px-6 bg-primary hover:bg-secondary btn-transition text-white font-bold rounded-xl "
          type="submit"
        >
          Create account
        </button>
        {/* Login Link */}
        <p className="text-[#4D516D] text-center">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-bold text-primary hover:text-secondary btn-transition hover:underline"
          >
            Log in
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Signup;
