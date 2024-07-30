import React from 'react';
import { Signup } from '../components/Signup';
import { Signin } from '../components/Signin';

export default function HomePage() {
  return (
    <div className="index">
      <div className="index__title">
        React練習專案
      </div>
      <Signin />
      <Signup />
    </div>
  );
}