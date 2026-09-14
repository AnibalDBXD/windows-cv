import React from 'react';
import ReactDOMServer from 'react-dom/server';
import SimpleCV from './pages/SimpleCV';

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <SimpleCV />
    </React.StrictMode>
  );
  return { html };
}
