import React from 'react';
import { hiraganaData } from '../data';

const HiraganaChart = () => {
  return (
    // Hiragana Chart Section
    <section id="hiraganaChart">
      <h3 className="font-bold mb-2 text-2xl">Hiragana Chart</h3>

      {/* Basic Hiragana Container */}
      <div className="chart-container grid-cols-5">
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

      <hr className="chart-break" />

      {/* Diacritics Container */}
      <div className="chart-container grid-cols-5">
        {hiraganaData.diacritics.map((char) => (
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

      <hr className="chart-break" />

      {/* Contracted Sounds Container */}
      <div className="chart-container grid-cols-3">
        {hiraganaData.contracted.map((char) => (
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

      <hr className="chart-break" />

      {/* Double Consonants Container */}

      <div className="chart-container grid-cols-4">
        {hiraganaData.doubleConsonants.map((char) => (
          <div
            key={`id-${char.romaji}`}
            className={`py-2 flex flex-col rounded-xl shadow-md ${
              char.romaji ? 'bg-red-100/50 border-2 border-primary-shade/40' : 'bg-slate-100'
            }`}
          >
            <span className="text-base md:text-2xl lg:text-3xl xl:text-4xl">{char.character}</span>
            <span className="chart-romaji">{char.romaji}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HiraganaChart;
