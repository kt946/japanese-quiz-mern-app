import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth';
import { HiX } from 'react-icons/hi';

const HiraganaQuiz = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  const [progressBarWidth, setProgressBarWidth] = useState(0);

  const handleProgressBarWidthChange = (width) => {
    let newWidth = progressBarWidth + width;
    console.log(newWidth);
    if (newWidth >= 100) {
      setProgressBarWidth(100);
    } else if (newWidth <= 0) {
      setProgressBarWidth(0);
    } else {
      setProgressBarWidth(newWidth);
    }
  };

  // Generate random number between 0 and 100
  const randomNumber = Math.floor(Math.random() * 100);

  return (
    <div
      id="characters"
      className="w-full min-h-screen bg-slate-100 flex flex-col justify-between"
    >
      {/* Quiz Header */}
      <div className="h-20">
        <div className="w-full h-full max-w-5xl mx-auto pt-12 px-4 flex items-center">
          {/* Back Button */}
          <button
            type="button"
            onClick={() => window.history.back()}
            className="btn-transition hover:opacity-60"
          >
            <HiX className="w-7 h-7 mr-4" />
          </button>

          {/* Progress Bar */}
          <div className="bg-slate-300 h-4 w-full rounded-2xl overflow-x-hidden">
            <div
              className={`${
                progressBarWidth <= 0 ? 'opacity-0' : ''
              } btn-transition h-full px-2 pt-1 bg-gradient-to-b from-primary-tint to-red-800 rounded-2xl`}
              style={{ width: `${progressBarWidth}%` }}
            >
              {/* inner bar */}
              <div className="bg-white/30 h-1 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Main */}
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-2xl h-full min-h-[450px] flex flex-col border-4 border-sky-500">
          <h1 className="font-bold text-3xl">Select the correct character(s) for ""</h1>
          <div className="flex flex-col grow justify-center items-center border-t-2 border-slate-300">
            <div className="h-full flex flex-col justify-center items-center text-8xl font-bold">{randomNumber}</div>
          </div>
        </div>
      </div>

      {/* Quiz Footer */}
      <div className="h-32 border-t-2 border-slate-300">
        <div className="w-full h-full max-w-5xl mx-auto px-4 flex items-center">
          {/* Answer Buttons */}
          <div className="flex flex-row justify-between w-full">
            <button
              type="button"
              className="btn-transition min-w-[150px] py-2 px-3 font-bold text-lg text-primary border-2 border-primary bg-white hover:bg-slate-200 rounded-xl"
              onClick={() => handleProgressBarWidthChange(-10)}
            >
              Skip
            </button>
            <button
              type="button"
              className="btn-transition min-w-[150px] py-2 px-3 font-bold text-lg text-white bg-primary hover:bg-primary-shade rounded-xl"
              onClick={() => handleProgressBarWidthChange(25)}
            >
              Check
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiraganaQuiz;
