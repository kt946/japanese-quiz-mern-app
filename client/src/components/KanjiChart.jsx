import React from 'react';
import { kanjiData } from '../data';
import KanjiLesson from './KanjiLesson';

const KanjiChart = () => {
  return (
    <section id="kanjiChart">
      <h3 className="font-bold mb-4 text-xl">Kanji Chart</h3>
      {/* Kanji Lessons */}
      <div className="flex flex-col gap-4">
        {/* Lesson 3 */}
        <div className="banner-container-style bg-gradient-to-r from-blue-600 to-blue-500">
          <KanjiLesson data={kanjiData.lesson3} />
          <div className="banner-bg-style bg-curtain" />
        </div>

        {/* Lesson 4 */}
        <div className="banner-container-style bg-gradient-to-r from-orange-600 to-orange-500">
          <KanjiLesson data={kanjiData.lesson4} />
          <div className="banner-bg-style bg-circles" />
        </div>

        {/* Lesson 5 */}
        <div className="banner-container-style bg-gradient-to-r from-lime-600 to-lime-400">
          <KanjiLesson data={kanjiData.lesson5} />
          <div className="banner-bg-style bg-autumn" />
        </div>
      </div>
    </section>
  );
};

export default KanjiChart;
