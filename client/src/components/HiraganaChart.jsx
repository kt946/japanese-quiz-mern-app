import React from 'react';
import { hiraganaData } from '../data';

const HiraganaChart = () => {
  return (
    // Hiragana Chart Section
    <section id="hiraganaChart">
      <h3 className="font-bold mb-2 text-2xl">Hiragana Chart</h3>

      {/* Basic Hiragana Container */}
      <div className="chart-container">
        {hiraganaData.basic.map((char) => (
          // Character Container
          <div
            key={`id-${char.romaji}`}
            className={`p-2 flex flex-col rounded-xl shadow-md ${
              char.romaji ? 'bg-red-100/50 border-2 border-primary-shade/40' : 'bg-slate-100'
            }`}
          >
            {/* Character */}
            {char.character}
            {/* Romaji */}
            <span className="chart-romaji">{char.romaji}</span>
          </div>
        ))}
      </div>

      <hr className="my-8 border-2 border-slate-200" />

      {/* Dakuon/Diacritical Marks Container */}
      <div className="chart-container">
        {hiraganaData.dakuon.map((char) => (
          <div
            key={`id-${char.romaji}`}
            className={`p-2 flex flex-col rounded-xl shadow-md ${
              char.romaji ? 'bg-red-100/50 border-2 border-primary-shade/40' : 'bg-slate-100'
            }`}
          >
            {char.character}
            <span className="chart-romaji">{char.romaji}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HiraganaChart;
