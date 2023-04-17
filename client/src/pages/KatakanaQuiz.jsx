import React from 'react';
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth';

const KatakanaQuiz = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  return <div>KatakanaQuiz</div>;
};

export default KatakanaQuiz;
