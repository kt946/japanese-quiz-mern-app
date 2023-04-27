import React from 'react';
import { hiraganaData } from '../data';

const HiraganaChart = () => {
  return (
    // Hiragana Chart Section
    <section id="hiraganaChart">
      <h3 className="font-bold mb-4 text-xl">Hiragana Chart</h3>

      {/* Basic Hiragana Container */}
      <div className="chart-container grid-cols-5">
        {hiraganaData.basic.map((char, index) => (
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
        {hiraganaData.diacritics.map((char, index) => (
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
        {hiraganaData.contracted.map((char, index) => (
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
        {hiraganaData.doubleConsonants.map((char, index) => (
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
        {hiraganaData.longVowels.map((char, index) => (
          <div
            key={`id-${index}`}
            className={`chart-char-container ${char.character ? 'chart-filled-container' : 'chart-empty-container'}`}
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
