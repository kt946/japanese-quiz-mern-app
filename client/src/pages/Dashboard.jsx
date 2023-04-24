import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Dashboard = () => {
  // If the user is not logged in, redirect to the login page
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  // get the user's data from the server
  const { data } = useQuery(QUERY_ME);
  // set the user's data to a variable
  const user = data?.me || {};

  return (
    <section
      id="dashboard"
      className="w-full min-h-screen p-4 md:p-8"
    >
      <h1 className="h1-style mb-8">Dashboard</h1>
      {/* Banner */}
      <div className="mb-8 banner-container-style text-white text-shadow bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="relative p-8 z-10">
          <h2 className="banner-heading mb-3">Welcome {user.username}!</h2>
          <p className="text-lg">Your adventure begins here</p>
        </div>
        <div className="banner-bg-style bg-parkay-floor" />
      </div>
      <div className="box-container-style mb-8 max-w-2xl">
        <p>
          These quizzes are intended to aid you in practicing the material you've learned in each lesson of{' '}
          <strong>Genki: An Integrated Course in Elementary Japanese textbooks (Third Edition)</strong>.
        </p>
        <br />
        <p>Select an exercise from a lesson to begin a quiz.</p>
      </div>

      <h3 className="font-bold mb-4 text-xl">Lessons</h3>
      {/* Lessons */}
      <div className="flex flex-col gap-4">
        <div className="text-white banner-container-style bg-gradient-to-r from-orange-600 to-orange-500">
          <div className="relative p-4 z-10">
            {/* Header */}
            <div className="mb-4">
              <h4 className="font-bold uppercase tracking-wider text-shadow">Lesson 0</h4>
              <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl text-shadow">Greetings & Numbers</h3>
            </div>

            {/* Content */}
            <ul className="sm:text-xl flex flex-col gap-2">
              <li>
                <Link
                  to="/quiz/lessons/lesson-0/greetings"
                  className="excercise-style"
                >
                  Greetings
                </Link>
              </li>
              <li>
                <Link className="excercise-style">Numbers</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
