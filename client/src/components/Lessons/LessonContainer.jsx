import React from 'react';
import { Link } from 'react-router-dom';

const LessonContainer = ({ lesson }) => {
  return (
    <div className="text-white banner-container-style bg-gradient-to-r from-orange-600 to-orange-500">
      <div className="relative p-4 z-10">
        {/* Header */}
        <div className="mb-4">
          <h4 className="font-bold uppercase tracking-wider text-shadow">Lesson {lesson.lessonNumber}</h4>
          <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl text-shadow">{lesson.lessonTitle}</h3>
        </div>

        {/* Content */}
        <ul className="sm:text-xl flex flex-col gap-2">
          {lesson.lessonUnits.map((unit) => (
            <li key={unit.unitUrl}>
              <Link
                to={`/quiz/lessons/${lesson.lessonUrl}/${unit.unitUrl}`}
                className="exercise-style"
              >
                {unit.unitTitle}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LessonContainer;
