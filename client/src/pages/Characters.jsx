import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth';

import { HiraganaChart, KatakanaChart, KanjiChart } from '../components';

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

  const bannerText = () => {
    switch (activeTab) {
      case 'Hiragana':
        return 'Master Japanese with the basics';
      case 'Katakana':
        return 'Improve your skills by practicing characters used for foreign words';
      default:
        return 'Discover the beauty and complexity of written Japanese';
    }
  };

  const displayChart = () => {
    switch (activeTab) {
      case 'Hiragana':
        return <HiraganaChart />;
      case 'Katakana':
        return <KatakanaChart />;
      default:
        return <KanjiChart />;
    }
  };

  return (
    <section
      id="characters"
      className="w-full min-h-screen bg-slate-100"
    >
      <div className="p-4 pb-0 sm:px-8 sm:pt-8 mb-8 flex flex-col gap-2">
        {/* Title */}
        <h1 className="h1-style mb-8">Characters</h1>

        {/* Banner */}
        <div className="p-8 text-white bg-gradient-to-b from-primary to-red-800 rounded-xl">
          <h2 className="banner-heading mb-3">Let's learn {activeTab}!</h2>
          <p className="text-lg">{bannerText()}</p>
        </div>
      </div>

      {/* Content */}
      <div className="sm:px-8">
        {/* Tabs */}
        <div className="border-b-2 border-b-slate-300 mb-4">
          <div className="max-w-sm flex justify-between font-bold text-lg text-center">
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
        <div className="p-4 bg-white rounded-xl shadow-md">{displayChart()}</div>
      </div>
    </section>
  );
};

export default Characters;
