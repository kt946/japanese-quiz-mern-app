import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Auth from '../utils/auth';

import { HiraganaChart, KatakanaChart, KanjiChart } from '../components';
import { charBannerText } from '../constants/constants';

const Characters = () => {
  // If the user is not logged in, redirect to the login page
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  const tabs = ['Hiragana', 'Katakana', 'Kanji'];
  const [activeTab, setActiveTab] = useState('Hiragana');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const chartComponent = {
    Hiragana: <HiraganaChart />,
    Katakana: <KatakanaChart />,
    Kanji: <KanjiChart />,
  };

  return (
    <section
      id="characters"
      className="w-full min-h-screen pb-8 bg-slate-100"
    >
      <div className="p-4 pb-0 sm:px-8 sm:pt-8 mb-8">
        {/* Title */}
        <h1 className="h1-style mb-8">Characters</h1>

        {/* Banner */}
        <div className="p-8 text-white text-shadow bg-gradient-to-r from-primary to-red-800 rounded-xl">
          <h2 className="banner-heading mb-3">Let's learn {activeTab}!</h2>
          <p className="text-lg">{charBannerText[activeTab]}</p>
        </div>
      </div>

      {/* Content */}
      <div className="sm:px-8">
        {/* Tabs */}
        <div className="mx-4 sm:mx-0 mb-8 border-b-2 border-b-slate-300 flex justify-center sm:justify-start">
          <div className="w-full sm:max-w-md grid grid-cols-3 font-bold sm:text-lg text-center">
            {tabs.map((tab) => (
              <button
                key={`id-${tab}`}
                type="button"
                className={`tab-style ${activeTab === tab ? 'tab-active-style' : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Start Quiz Button */}
        <div className="px-4 sm:px-0 mb-8 flex justify-center sm:justify-start">
          <Link
            to={`/quiz/${activeTab.toLowerCase()}`}
            className="w-full sm:w-fit btn-transition px-8 py-4 text-center text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-xl"
          >
            Start {activeTab} Quiz
          </Link>
        </div>

        <div className="p-4 bg-white rounded-xl shadow-md">{chartComponent[activeTab]}</div>
      </div>
    </section>
  );
};

export default Characters;
