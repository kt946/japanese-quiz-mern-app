import React from 'react';
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth';

const Dashboard = () => {
  const loggedIn = Auth.loggedIn();
  // If the user is not logged in, redirect to the login page
  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <section
      id="Dashboard"
      className="w-full min-h-[calc(100vh-72px)] py-14 bg-slate-200 hero-bg flex justify-center items-center text-center"
    >
      <h1 className="text-5xl font-bold">Dashboard</h1>
    </section>
  );
};

export default Dashboard;
