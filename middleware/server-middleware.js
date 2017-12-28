import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../client/src/App.jsx';

export default options => (req, res, next) => {
  const html = renderToString(
    <App />
  );

  // using html webpack plugin would be better here
  const template = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Magnet</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script type="text/javascript" src="bundle.js"></script>
      </body>
    </html>
  `;

  res.status(200).send(template);
};
