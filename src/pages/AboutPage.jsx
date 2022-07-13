import React from 'react';
import { renderPage } from '../utils/renderpage';
import './AboutPage.scss';
import Navigation from './Navigation';
// import Navigation from './Navigation';

export const About = () => {
  return (
    <div className={'about'}>
      <h1>About</h1>
      <Navigation/>
    </div>
  );
};

renderPage(<About/>)

export default About;



