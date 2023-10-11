import { useState } from 'react';
import { Link } from 'react-router-dom';

const KanjiLesson = ({ data }) => {
  const [displayTable, setDisplayTable] = useState(false);

  return (
    // Kanji Lesson Container
    <div className={`banner-container-style ${data.backgroundColor}`}>
      <div className="relative p-4 z-10">
        {/* Header */}
        <div className="text-gray-100">
          {/* Lesson Number and Pages*/}
          <p className="font-bold opacity-80 uppercase tracking-wider text-shadow">Lesson {data.lessonNumber}</p>
          <div className="flex flex-col sm:flex-row justify-between">
            {/* Subject Title */}
            <div>
              <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl text-shadow">{data.title}</h4>
              <p className="font-bold opacity-80 tracking-wider text-shadow">{data.lessonPages}</p>
            </div>
            <div className="flex items-end mt-4 sm:mt-0 gap-4 font-bold">
              {/* Start Quiz Button */}
              <Link
                to={`/quiz/kanji/${data.url}`}
                className="w-full h-fit sm:w-32 p-2 sm:px-4 border-2 border-white bg-white hover:bg-gray-200 hover:border-gray-200 text-gray-800 rounded-xl flex items-center justify-center"
              >
                Start Quiz
              </Link>

              {/* Display Table Button */}
              <button
                className="w-full h-fit sm:w-32 p-2 sm:px-4 border-2 border-gray-100 bg-gray-800/30 hover:bg-gray-800/50 backdrop-blur-sm text-shadow rounded-xl"
                onClick={() => setDisplayTable(!displayTable)}
              >
                {displayTable ? 'Hide Table' : 'Show Table'}
              </button>
            </div>
          </div>
        </div>

        {/* Lesson Content */}
        {displayTable && (
          <table className="table-auto mt-4 bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-md">
            <thead>
              <tr className="bg-gray-100 dark:bg-slate-800 text-sm sm:text-base">
                <th className="p-3">Kanji</th>
                <th className="p-3">Readings</th>
                <th className="p-3">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {data.kanji.map((kanji) => (
                <tr key={`id-${kanji.meanings}`}>
                  <td className="w-fit border-2 dark:border-gray-700 p-2 sm:p-4 text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-center scale-150 md:scale-100">
                    {kanji.character}
                  </td>
                  <td className="w-1/2 border-2 dark:border-gray-700 p-2 sm:p-4 text-xl sm:text-2xl md:text-3xl">
                    <div className="grid gap-2">
                      {kanji.readings &&
                        kanji.readings.split(',').map((reading) => (
                          <p
                            key={`id-${reading}`}
                            className="bg-red-100 dark:bg-slate-700 p-1 rounded-lg w-fit"
                          >
                            {reading}
                          </p>
                        ))}
                    </div>
                  </td>
                  <td className="w-1/2 border-2 dark:border-gray-700 p-2 sm:p-4 md:text-xl">{kanji.meanings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className={`banner-bg-style ${data.backgroundImage}`} />
    </div>
  );
};

export default KanjiLesson;
