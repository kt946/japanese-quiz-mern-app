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
      className="w-full min-h-screen p-4 md:p-8"
    >
      <div className="mb-8">
        {/* Page Heading */}
        <h1 className="h1-style mb-8">Characters</h1>

        {/* Tabs */}
        <div className="mb-8 border-b-2 border-b-gray-300 dark:border-gray-700 flex justify-center sm:justify-start">
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

        {/* Banner */}
        <div className="banner-container-style text-white text-shadow bg-gradient-to-r from-primary to-red-800">
          <div className="relative p-8 z-10">
            <h2 className="banner-heading mb-3">Let's learn {activeTab}!</h2>
            <p className="text-lg">{charBannerText[activeTab]}</p>
          </div>
          <div className="banner-bg-style bg-clouds" />
        </div>
      </div>

      {/* Content */}
      <div>
        {/* Start Quiz Button for Hiragana and Katakana */}
        {(activeTab === 'Hiragana' || activeTab === 'Katakana') && (
          <div className="mb-8 flex justify-center sm:justify-start">
            <Link
              to={`/quiz/${activeTab.toLowerCase()}`}
              className="w-full sm:w-fit px-8 py-4 font-bold text-lg text-center text-white dark:text-slate-800 bg-blue-500 hover:bg-blue-600 dark:bg-sky-400 dark:hover:bg-sky-500 rounded-xl"
            >
              Start {activeTab} Quiz
            </Link>
          </div>
        )}

        <div>{chartComponent[activeTab]}</div>
      </div>
    </section>
  );
};

export default Characters;
