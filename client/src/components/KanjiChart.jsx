import React from 'react';
import { kanjiData } from '../data';
import KanjiLesson from './KanjiLesson';

const KanjiChart = () => {
  return (
    <section id="kanjiChart">
      <h3 className="font-bold mb-4 text-xl">Kanji Chart</h3>
      {/* Kanji Lessons */}
      <div className="flex flex-col gap-4">
        <KanjiLesson data={kanjiData.lesson3} />

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
