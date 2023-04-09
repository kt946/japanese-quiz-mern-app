import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/CampfireLogo.svg';
import { HiEye, HiEyeOff } from 'react-icons/hi';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section
      id="login"
      className="w-full min-h-[calc(100vh-72px)] py-14 flex justify-center bg-slate-200 hero-bg"
    >
      {/* Log In Form */}
      <form className="w-full max-w-sm h-fit flex flex-col justify-center items-center bg-white p-8 rounded-xl shadow-xl">
        <img
          src={logo}
          alt="Campfire Logo"
          className="w-12 h-12 mx-auto mb-2"
        />
        <h1 className="text-2xl font-bold mb-6 text-center">Log in</h1>
        {/* Fields Container */}
        <div className="w-full flex flex-col gap-4">
          {/* Email Field Wrapper*/}
          <div className="flex flex-col gap-1">
            <label
              className="font-bold"
              for="email"
            >
              Email
            </label>
            <input
              className="form-input-style px-3 py-2"
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              required
            />
          </div>
          {/* Password Field Wrapper */}
          <div className="flex flex-col gap-1">
            <label
              className="font-bold"
              for="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="password-input"
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
                className="absolute inset-y-0 right-0 btn-transition m-[1px] px-3 py-3 rounded-r-xl hover:bg-slate-200"
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          className="w-full my-6 py-3 px-6 bg-primary hover:bg-primary-shade btn-transition text-white font-bold rounded-xl "
          type="submit"
        >
          Log in
        </button>
        {/* Sign Up Link */}
        <p className="text-[#4D516D] text-center">
          Not a member?{' '}
          <Link
            to="/signup"
            className="font-bold text-primary hover:text-primary-shade btn-transition hover:underline"
          >
            Sign up
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
