import { useEffect } from 'react';
import { runFireworks } from '../utils/confetti';

import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_EXPERIENCE } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';

const CompleteScreen = ({ quiz }) => {
  useEffect(() => {
    runFireworks();
    updateUserExperience(xp);
  }, []);

  // get score, xp, and formatted time from quiz
  const { score, xp } = quiz.getScoreAndXP();
  const time = quiz.getTime();

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
    <div className="grow flex flex-col justify-center items-center text-center gap-8">
      <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">Quiz Complete!</h1>
      <hr className="w-full max-w-2xl border-4 border-primary" />
      {/* Quiz Statistics Cards */}
      <div className="w-full max-w-2xl flex flex-row gap-2 sm:gap-4 md:gap-8 font-bold">
        {/* Score Card */}
        <div className="quiz-stat-container border-amber-500">
          {/* Card Header */}
          <div className="bg-amber-200 p-2">
            <h2 className="uppercase text-amber-700">Score</h2>
          </div>
          {/* Card Body */}
          <div className="quiz-stat-body">
            <h3 className="text-amber-700">{score} %</h3>
          </div>
        </div>
        {/* XP Card */}
        <div className="quiz-stat-container border-sky-500">
          {/* Card Header */}
          <div className="bg-sky-200 p-2">
            <h2 className="uppercase text-sky-700">Earned</h2>
          </div>
          {/* Card Body */}
          <div className="quiz-stat-body">
            <h3 className="text-sky-700">+{xp} XP</h3>
          </div>
        </div>
        {/* Time Card */}
        <div className="quiz-stat-container border-lime-500">
          {/* Card Header */}
          <div className="bg-lime-200 p-2">
            <h2 className="uppercase text-lime-700">Time</h2>
          </div>
          {/* Card Body */}
          <div className="quiz-stat-body">
            <h3 className="text-lime-700">{time}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteScreen;
