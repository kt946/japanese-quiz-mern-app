import React from 'react';
import { Navigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_EXPERIENCE } from '../utils/mutations';
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

  // set up the mutation for updating user's experience
  const [updateExperience] = useMutation(UPDATE_EXPERIENCE);

  // update current user's experience
  const updateUserExperience = async (experience) => {
    // increment the user's current experience
    let currentExperience = user.experience;
    currentExperience += experience;

    try {
      // execute the mutation
      await updateExperience({
        // pass the new experience value to the mutation under the experience variable
        variables: {
          experience: currentExperience,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      id="dashboard"
      className="w-full min-h-screen p-8 bg-slate-100"
    >
      <div className="flex flex-col gap-2">
        <h1 className="h1-style">Dashboard</h1>
        {/* Get username*/}
        <p className="text-xl font-semibold">Welcome, {user.username}!</p>
        {/* Get email */}
        <p className="text-xl font-semibold">Email: {user.email}</p>
        {/* Get experience */}
        <p className="text-xl font-semibold">Experience: {user.experience} XP</p>
        {/* Update experience by 15 points */}
        <button
          type="button"
          className="max-w-sm py-3 px-6 bg-primary hover:bg-primary-shade btn-transition text-white font-bold rounded-xl"
          onClick={() => updateUserExperience(15)}
        >
          Add Experience
        </button>
        <button
          type="button"
          className="max-w-sm py-3 px-6 bg-primary hover:bg-primary-shade btn-transition text-white font-bold rounded-xl"
          onClick={() => updateUserExperience(-15)}
        >
          Subtract Experience
        </button>
      </div>
    </section>
  );
};

export default Dashboard;
