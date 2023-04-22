import { useState } from 'react';

const KanjiLesson = ({ data }) => {
  const [displayTable, setDisplayTable] = useState(false);

  return (
    // Kanji Lesson Container
    <div className="relative p-4 z-10">
      {/* Header */}
      <div className="text-slate-100">
        {/* Lesson Number */}
        <h4 className="uppercase tracking-wider text-shadow">Lesson {data.lessonNumber}</h4>
        <div className="flex flex-col sm:flex-row justify-between">
          {/* Subject Title */}
          <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl text-shadow">{data.subject}</h3>
          <div className="flex mt-4 sm:mt-0 gap-4 font-bold">
            {/* Display Table Button */}
            <button
              className="btn-transition w-full sm:w-fit p-2 sm:px-4 border-2 border-slate-100 bg-slate-800/30 hover:bg-slate-800/50 backdrop-blur-sm text-shadow rounded-xl"
              onClick={() => setDisplayTable(!displayTable)}
            >
              {displayTable ? 'Hide Table' : 'Show Table'}
            </button>

            {/* Start Quiz Button */}
            <button
              type="button"
              className="btn-transition w-full sm:w-fit p-2 sm:px-4 bg-slate-100 hover:bg-slate-300 text-slate-800 rounded-xl"
              onClick={() => {}}
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      {displayTable && (
        <table className="table-auto mt-4 bg-white rounded-xl overflow-hidden shadow-md">
          <thead>
            <tr className="bg-slate-100 text-sm sm:text-base">
              <th className="p-3">Kanji</th>
              <th className="p-3">Readings</th>
              <th className="p-3">Meaning</th>
            </tr>
          </thead>
          <tbody>
            {data.kanji.map((kanji) => (
              <tr key={`id=${kanji.meanings}`}>
                <td className="w-fit border-2 p-2 sm:p-4 text-xl font-bold md:font-normal sm:text-2xl md:text-5xl lg:text-7xl text-center">
                  {kanji.character}
                </td>
                <td className="w-1/2 border-2 p-2 sm:p-4 sm:text-2xl md:text-3xl">{kanji.readings}</td>
                <td className="w-1/2 border-2 p-2 sm:p-4 md:text-xl">{kanji.meanings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default KanjiLesson;
