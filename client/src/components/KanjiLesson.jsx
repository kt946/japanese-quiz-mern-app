import { useState } from 'react';

const KanjiLesson = ({ data }) => {
  const [displayTable, setDisplayTable] = useState(false);

  return (
    // Kanji Lesson Container
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl">
      <div className="font-bold">
        <h4 className="text-white uppercase tracking-wider text-shadow">Lesson {data.lessonNumber}</h4>
        <div className="flex flex-col sm:flex-row justify-between">
          <h3 className="text-3xl sm:text-4xl text-white text-shadow">{data.subject}</h3>
          <div className="flex mt-4 sm:mt-0 gap-4">
            {/* Display Table Button */}
            <button
              className="btn-transition w-full sm:w-fit p-2 sm:px-4 border-2 border-slate-100 text-slate-100 hover:bg-slate-800/20 text-shadow rounded-xl"
              onClick={() => setDisplayTable(!displayTable)}
            >
              {displayTable ? 'Hide Table' : 'Show Table'}
            </button>

            {/* Start Quiz Button */}
            <button
              type="button"
              className="btn-transition w-full sm:w-fit p-2 sm:px-4 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-xl"
              onClick={() => {}}
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      {displayTable && (
        <table className="table-fixed mt-4 bg-white rounded-xl overflow-hidden shadow-md">
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
