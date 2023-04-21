import React from 'react';
import { kanjiData } from '../data';

console.log(kanjiData.lesson3.kanji);

const KanjiChart = () => {
  return (
    <section id="kanjiChart">
      <h3 className="font-bold mb-4 text-xl">Kanji Chart</h3>
      {/* Kanji Lessons */}
      <div className="flex flex-col gap-4">
        {/* Lesson Container */}
        <div>
          {/* Lesson Banner */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl">
            <div className="mb-2 font-bold">
              <h4 className="text-white uppercase tracking-wider text-shadow">Lesson 3</h4>
              <h3 className="text-3xl md:text-4xl text-white text-shadow">Daily Life</h3>
            </div>

            {/* Lesson Content */}
            <table className="table-fixed mt-4 bg-white rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-slate-100 text-sm sm:text-base">
                  <th className="p-3">Kanji</th>
                  <th className="p-3">Readings</th>
                  <th className="p-3">Meaning</th>
                </tr>
              </thead>
              <tbody>
                {kanjiData.lesson3.kanji.map((kanji) => (
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
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-600 p-4 rounded-xl">
          <h4 className="font-bold text-white uppercase tracking-wider text-shadow">Lesson 4</h4>
          <h3 className="font-bold text-4xl text-white text-shadow">Mary's Weekend</h3>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-600 p-4 rounded-xl">
          <h4 className="font-bold text-white uppercase tracking-wider text-shadow">Lesson 5</h4>
          <h3 className="font-bold text-4xl text-white text-shadow">Travel</h3>
        </div>
      </div>
    </section>
  );
};

export default KanjiChart;
