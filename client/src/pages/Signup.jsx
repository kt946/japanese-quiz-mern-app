import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/SakuraStudyLogo.svg';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { FaExclamationCircle } from 'react-icons/fa';

import { useMutation } from '@apollo/client'; // import the useMutation hook
import { ADD_USER } from '../utils/mutations'; // import the ADD_USER mutation
import Auth from '../utils/auth'; // import the Auth utility function

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false); // state for toggling password visibility
  const [addUser, { loading, error }] = useMutation(ADD_USER);

  const formRef = useRef(null); // reference to the form element

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const inputData = Object.fromEntries(formData.entries());

    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...inputData },
      });

      // takes the token and sets it to localStorage
      Auth.login(data.addUser.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      id="signup"
      className="w-full min-h-[calc(100vh-72px)] py-14 flex justify-center bg-slate-200 hero-bg"
    >
      {/* Sign Up Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full max-w-sm h-fit flex flex-col justify-center items-center bg-white p-8 rounded-xl shadow-xl"
      >
        <img
          src={logo}
          alt="Sakura Study Logo"
          className="w-12 h-12 mx-auto mb-2"
        />
        <h1 className="text-2xl font-bold mb-6 text-center">Sign up</h1>
        {/* Fields Container */}
        <div className="w-full flex flex-col gap-4">
          {/* Username Field Wrapper*/}
          <div className="flex flex-col gap-1">
            <label
              className="font-bold"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="form-input-style px-3 py-2"
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
              htmlFor="email"
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
              htmlFor="password"
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
                autoComplete="off"
                required
              />
              {/* Show password button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 h-fit w-fit my-auto mr-2 p-2 btn-transition rounded-full hover:bg-slate-300"
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 mt-4 flex items-center">
            <FaExclamationCircle className="mr-1" />
            An error has occurred!
          </p>
        )}

        {/* Submit Button */}
        <button
          className="w-full my-6 py-3 px-6 bg-primary hover:bg-primary-shade btn-transition text-white font-bold rounded-xl "
          type="submit"
        >
          {loading ? 'Signing in' : 'Create account'}
        </button>
        {/* Login Link */}
        <p className="text-[#4D516D] text-center">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-bold text-primary hover:text-primary-shade btn-transition hover:underline"
          >
            Log in
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Signup;
