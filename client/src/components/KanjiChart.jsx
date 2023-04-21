import React from 'react';

const KanjiChart = () => {
  return (
    <section id="kanjiChart">
      <h3 className="font-bold mb-4 text-xl">Kanji Chart</h3>
      {/* Kanji Lessons */}
      <div className="flex flex-col gap-4">
        {/* Lesson Container */}
        <div>
          {/* Lesson Banner */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl font-bold">
            <div className="mb-2">
              <h4 className="text-white uppercase tracking-wider text-shadow">Lesson 3</h4>
              <h3 className="text-3xl md:text-4xl text-white text-shadow">Daily Life</h3>
            </div>

            {/* Lesson Content */}
            <div className="p-4 grid grid-cols-2 gap-4 bg-white rounded-xl shadow-md"></div>
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
