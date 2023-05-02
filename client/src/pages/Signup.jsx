import { useState, useRef } from 'react';
import { Link, Navigate } from 'react-router-dom';
import logo from '../assets/SakuraStudyLogo.svg';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { FaExclamationCircle } from 'react-icons/fa';
import { AiOutlineLoading } from 'react-icons/ai';

import { useMutation } from '@apollo/client'; // import the useMutation hook
import { ADD_USER } from '../utils/mutations'; // import the ADD_USER mutation
import Auth from '../utils/auth'; // import the Auth utility function

const Signup = () => {
  const loggedIn = Auth.loggedIn();
  if (loggedIn) {
    return <Navigate to="/dashboard" />;
  }

  const [showPassword, setShowPassword] = useState(false); // state for toggling password visibility
  const [addUser, { loading, error }] = useMutation(ADD_USER); // use the useMutation hook to execute the ADD_USER mutation
  const [errorMessage, setErrorMessage] = useState(''); // state for displaying error message

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

      // set error message based on error message from server
      // username or email already exists, password shorter than 5 characters
      switch (true) {
        case error.message.includes('username_1 dup key'):
          setErrorMessage('Username already exists');
          break;
        case error.message.includes('email_1 dup key'):
          setErrorMessage('Email already exists');
          break;
        case error.message.includes('Must match an email address'):
          setErrorMessage('Email must be a valid address');
          break;
        case error.message.includes('shorter than the minimum allowed length'):
          setErrorMessage('Password must be at least 5 characters');
          break;
        default:
          setErrorMessage('Something went wrong');
          break;
      }
    }
  };

  return (
    <section
      id="signup"
      className="w-full min-h-[calc(100vh-72px)] py-14 flex justify-center hero-bg"
    >
      {/* Sign Up Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="form-container-style"
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
                autoComplete="off"
                required
              />
              {/* Show password button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-show-btn"
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 mt-6 inline-flex items-center text-sm sm:text-base">
            <FaExclamationCircle className="mr-1" />
            {errorMessage}
          </p>
        )}

        {/* Submit Button */}
        <button
          className="w-full mt-6 py-3 px-6 bg-primary hover:bg-primary-shade text-white font-bold rounded-xl"
          type="submit"
        >
          {loading ? <AiOutlineLoading className="animate-spin h-6 w-6 mx-auto" /> : 'Create account'}
        </button>
        {/* Login Link */}
        <p className="mt-6 text-gray-500 dark:text-gray-400 text-center">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-bold text-primary hover:text-primary-shade hover:underline"
          >
            Log in
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Signup;
