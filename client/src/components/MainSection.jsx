// This contains the routes for the app and additional styling for the app depending on logged in state and path
import { useEffect } from 'react';
import { Header, Footer, Sidebar, MobileMenu } from '.';
import { Route, Routes, useLocation } from 'react-router-dom';

import { Home, Login, Signup, NoMatch, Dashboard, Characters, Leaderboards, Profile, QuizPage } from '../pages';

import Auth from '../utils/auth';
import { HiraKataKanjiQuiz, VocabQuiz } from '../utils/quizGenerator';
import { hiraganaData, katakanaData, kanjiData, lessonData } from '../data';

const MainSection = () => {
  const loggedIn = Auth.loggedIn();
  // returns true if locations includes /quiz
  const quizLocation = useLocation().pathname.includes('/quiz');
  
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {loggedIn && !quizLocation && <Sidebar />}
      <div
        className={`overflow-x-hidden overflow-y-auto flex flex-col ${
          loggedIn ? (quizLocation ? '' : 'mb-20 sm:mb-0 sm:ms-[88px] xl:ms-[300px]') : ''
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
                {kanjiData.map((lesson) => (
                  <Route
                    key={lesson.url}
                    path={lesson.url}
                    element={<QuizPage quiz={new HiraKataKanjiQuiz('kanji', lesson.kanji)} />}
                  />
                ))}
              </Route>
              <Route path="lessons">
                {lessonData.map((lesson) => (
                  <Route
                    key={lesson.lessonUrl}
                    path={lesson.lessonUrl}
                  >
                    {lesson.lessonUnits.map((unit) => (
                      <Route
                        key={unit.unitUrl}
                        path={unit.unitUrl}
                        element={<QuizPage quiz={new VocabQuiz(unit.unitUrl, unit.unitContent)} />}
                      />
                    ))}
                  </Route>
                ))}
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
      {loggedIn && !quizLocation && <MobileMenu />}
    </>
  );
};

export default MainSection;
