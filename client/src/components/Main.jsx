// This contains the routes for the app and additional styling for the app depending on logged in state and path
import React from 'react';
import { Header, Footer, Sidebar } from './';
import { Route, Routes, useLocation } from 'react-router-dom';

import {
  Home,
  Login,
  Signup,
  NoMatch,
  Dashboard,
  Characters,
  Leaderboard,
  Profile,
  HiraganaQuiz,
  KatakanaQuiz,
} from '../pages';

import Auth from '../utils/auth';

const Main = () => {
  const loggedIn = Auth.loggedIn();
  const location = useLocation();
  // returns true if locations includes /quiz
  const quizLocation = location.pathname.includes('/quiz');

  return (
    <>
      {loggedIn && <Sidebar />}
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
              path="/leaderboard"
              element={<Leaderboard />}
            />
            <Route
              path="/profile"
              element={<Profile />}
            />
            <Route path="/quiz">
              <Route
                path="hiragana"
                element={<HiraganaQuiz />}
              />
              <Route
                path="katakana"
                element={<KatakanaQuiz />}
              />
            </Route>
            <Route
              path="*"
              element={<NoMatch />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Main;
