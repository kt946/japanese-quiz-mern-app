import React from 'react';
import { hiraganaData } from '../data';

const HiraganaChart = () => {
  return (
    <section id="hiraganaChart">
      <h3 className="font-bold mb-2 text-lg">Hiragana Chart</h3>
      <div className="grid grid-cols-5 gap-4 text-4xl text-center font-bold">
        {hiraganaData.basic.map((char) => (
          <div
            key={`id-${char.romaji}`}
            className={`p-2 flex flex-col rounded-xl shadow-md ${
              char.romaji ? 'bg-red-100/50 border-2 border-primary-shade/40' : 'bg-slate-100'
            }`}
          >
            {char.character}

            <span className="font-normal text-xl">{char.romaji}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HiraganaChart;
