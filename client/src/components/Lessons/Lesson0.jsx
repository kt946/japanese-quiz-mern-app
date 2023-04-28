import React from 'react';
import { Link } from 'react-router-dom';

const Lesson0 = () => {
  return (
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
              className="exercise-style"
            >
              Greetings
            </Link>
          </li>
          <li>
            <Link
              to="/quiz/lessons/lesson-0/numbers"
              className="exercise-style"
            >
              Numbers
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Lesson0;
