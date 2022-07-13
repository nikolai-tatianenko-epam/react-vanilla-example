import React from 'react';

import './App.scss';
import { renderPage } from './utils/renderpage';
import Navigation from './pages/Navigation';
// import Navigation from './pages/Navigation';

const App = () => {
  return <>
    <h1>Hello React</h1>
    <Navigation/>
  </>;
};
renderPage(<App/>);
export default App;
