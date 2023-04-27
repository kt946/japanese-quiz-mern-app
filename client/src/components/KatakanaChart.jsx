import React from 'react';
import { katakanaData } from '../data';

const KatakanaChart = () => {
  return (
    // Katakana Chart Section
    <section id="katakanaChart">
      <h3 className="font-bold mb-4 text-xl">Katakana Chart</h3>

      {/* Basic Katakana Container */}
      <div className="chart-container grid-cols-5">
        {katakanaData.basic.map((char, index) => (
          // Character Container
          <div
            key={`id-${index}`}
            className={`chart-char-container ${char.character ? 'chart-filled-container' : 'chart-empty-container'}`}
          >
            {/* Character */}
            {char.character}
            {/* Romaji */}
            <span className="chart-romaji">{char.romaji}</span>
          </div>
        ))}
      </div>

      <hr className="chart-break" />

      {/* Diacritics Container */}
      <div className="chart-container grid-cols-5">
        {katakanaData.diacritics.map((char, index) => (
          <div
            key={`id-${index}`}
            className="chart-char-container chart-filled-container"
          >
            {char.character}
            <span className="chart-romaji">{char.romaji}</span>
          </div>
        ))}
      </div>

      <hr className="chart-break" />

      {/* Contracted Sounds Container */}
      <div className="chart-container grid-cols-3">
        {katakanaData.contracted.map((char, index) => (
          <div
            key={`id-${index}`}
            className="chart-char-container chart-filled-container"
          >
            {char.character}
            <span className="chart-romaji">{char.romaji}</span>
          </div>
        ))}
      </div>

      <hr className="chart-break" />

      {/* Double Consonants Container */}
      <div className="chart-container grid-cols-4">
        {katakanaData.doubleConsonants.map((char, index) => (
          <div
            key={`id-${index}`}
            className="chart-char-container chart-filled-container"
          >
            {char.character}
            <span className="chart-romaji">{char.romaji}</span>
          </div>
        ))}
      </div>

      <hr className="chart-break" />

      {/* Long Vowels Container */}
      <div className="chart-container grid-cols-5">
        {katakanaData.longVowels.map((char, index) => (
          <div
            key={`id-${index}`}
            className="chart-char-container chart-filled-container"
          >
            {char.character}
            <span className="chart-romaji">{char.romaji}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KatakanaChart;
