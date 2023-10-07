import React from 'react';
import { kanjiData } from '../data';
import KanjiLesson from './KanjiLesson';

const KanjiChart = () => {
  return (
    <section id="kanjiChart">
      <h3 className="font-bold mb-4 text-xl">Kanji Chart</h3>
      {/* Kanji Lessons */}
      <div className="flex flex-col gap-4">
        {kanjiData.map((lesson) => (
          <KanjiLesson
            key={lesson.url}
            data={lesson}
          />
        ))}
      </div>
    </section>
  );
};

export default KanjiChart;
