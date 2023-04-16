import React from 'react';
import { katakanaData } from '../data';

const KatakanaChart = () => {
  return (
    // Katakana Chart Section
    <section id="katakanaChart">
      <h3 className="font-bold mb-2 text-2xl">Katakana Chart</h3>

      {/* Basic Katakana Container */}
      <div className="chart-container grid-cols-5">
        {katakanaData.basic.map((char, index) => (
          // Character Container
          <div
            key={`id-${index}`}
            className={`chart-char-container ${char.character ? 'chart-filled-container' : 'bg-slate-100'}`}
          >
            {/* Character */}
            {char.character}
            {/* Romaji */}
            <span className="chart-romaji">{char.romaji}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KatakanaChart;
