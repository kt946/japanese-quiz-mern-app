import React from 'react';
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth';

const HiraganaQuiz = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  return <div>HiraganaQuiz</div>;
};

export default HiraganaQuiz;
