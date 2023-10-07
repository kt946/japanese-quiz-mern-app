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

        {/* Lesson 6 */}
        <div className="banner-container-style bg-gradient-to-r from-[#c20323] to-[#ef233c]">
          <KanjiLesson data={kanjiData.lesson6} />
          <div className="banner-bg-style bg-i-like-food" />
        </div>

        {/* Lesson 7 */}
        <div className="banner-container-style bg-gradient-to-r from-purple-600 to-purple-500">
          <KanjiLesson data={kanjiData.lesson7} />
          <div className="banner-bg-style bg-groovy" />
        </div>

        {/* Lesson 8 */}
        <div className="banner-container-style bg-gradient-to-r from-cyan-600 to-cyan-400">
          <KanjiLesson data={kanjiData.lesson8} />
          <div className="banner-bg-style bg-signal" />
        </div>

        {/* Lesson 9 */}
        <div className="banner-container-style bg-gradient-to-r from-emerald-600 to-emerald-400">
          <KanjiLesson data={kanjiData.lesson9} />
          <div className="banner-bg-style bg-bathroom-floor" />
        </div>

        {/* Lesson 10 */}
        <div className="banner-container-style bg-gradient-to-r from-amber-500 to-amber-400">
          <KanjiLesson data={kanjiData.lesson10} />
          <div className="banner-bg-style bg-bamboo" />
        </div>

        {/* Lesson 11 */}
        <div className="banner-container-style bg-gradient-to-r from-indigo-600 to-indigo-500">
          <KanjiLesson data={kanjiData.lesson11} />
          <div className="banner-bg-style bg-jigsaw" />
        </div>

        {/* Lesson 12 */}
        <div className="banner-container-style bg-gradient-to-r from-rose-600 to-rose-500">
          <KanjiLesson data={kanjiData.lesson12} />
          <div className="banner-bg-style bg-leaf" />
        </div>
      </div>
    </section>
  );
};

export default KanjiChart;
