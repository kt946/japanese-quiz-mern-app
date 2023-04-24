// This contains the routes for the app and additional styling for the app depending on logged in state and path
import React from 'react';
import { Header, Footer, Sidebar } from '.';
import { Route, Routes, useLocation } from 'react-router-dom';

import { Home, Login, Signup, NoMatch, Dashboard, Characters, Leaderboards, Profile, QuizPage } from '../pages';

import Auth from '../utils/auth';
import { HiraKataKanjiQuiz, VocabQuiz } from '../utils/quizGenerator';
import { hiraganaData, katakanaData, kanjiData, lessonData } from '../data';

const MainSection = () => {
  const loggedIn = Auth.loggedIn();
  // returns true if locations includes /quiz
  const quizLocation = useLocation().pathname.includes('/quiz');

  return (
    <>
      {loggedIn && !quizLocation && <Sidebar />}
      <div
        className={`overflow-x-hidden overflow-y-auto flex flex-col ${
          loggedIn ? (quizLocation ? '' : 'sm:ms-[88px] xl:ms-[300px]') : ''
        }`}
      >
        {!loggedIn && <Header />}
        <main>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
            <Route
              path="/characters"
              element={<Characters />}
            />
            <Route
              path="/leaderboards"
              element={<Leaderboards />}
            />
            <Route
              path="/profile"
              element={<Profile />}
            />
            <Route path="/quiz">
              <Route
                path="hiragana"
                element={
                  <QuizPage
                    quiz={
                      new HiraKataKanjiQuiz(
                        'hiragana',
                        hiraganaData.basic,
                        hiraganaData.diacritics,
                        hiraganaData.contracted
                      )
                    }
                  />
                }
              />
              <Route
                path="katakana"
                element={
                  <QuizPage
                    quiz={
                      new HiraKataKanjiQuiz(
                        'katakana',
                        katakanaData.basic,
                        katakanaData.diacritics,
                        katakanaData.contracted
                      )
                    }
                  />
                }
              />
              <Route path="kanji">
                <Route
                  path="lesson-3"
                  element={<QuizPage quiz={new HiraKataKanjiQuiz('kanji', kanjiData.lesson3.kanji)} />}
                />
                <Route
                  path="lesson-4"
                  element={<QuizPage quiz={new HiraKataKanjiQuiz('kanji', kanjiData.lesson4.kanji)} />}
                />
                <Route
                  path="lesson-5"
                  element={<QuizPage quiz={new HiraKataKanjiQuiz('kanji', kanjiData.lesson5.kanji)} />}
                />
              </Route>
              <Route path="lessons">
                <Route
                  path="lesson-0/greetings"
                  element={<QuizPage quiz={new VocabQuiz(lessonData.lesson0.greetings.vocabulary)} />}
                />
              </Route>
            </Route>
            <Route
              path="*"
              element={<NoMatch />}
            />
          </Routes>
        </main>
        {!quizLocation && <Footer />}
      </div>
    </>
  );
};

export default MainSection;
