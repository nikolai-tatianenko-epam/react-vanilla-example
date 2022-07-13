import ReactDOM from 'react-dom';
import React from 'react';

export const renderPage = (component, containerId = 'app') => {
  if (process.env.NODE_ENV === 'production') {
    const el = document.getElementById(containerId);
    ReactDOM.render(component, el);
  }
};
