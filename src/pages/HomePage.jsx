import React from 'react';
import { renderPage } from '../utils/renderpage';
import './AboutPage.scss';

// import Navigation  from './Navigation';

export const HomePage = () => {
  return (
    <div className={'homepage'}>
      <h1>Home Page</h1>
    </div>
  );
};
renderPage(<HomePage/>)
export default HomePage;



