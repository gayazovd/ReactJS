import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import Root from './app';

function renderHtml(html, preloadedState) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <base href="/" />
        <title>Document</title>
        ${
          process.env.NODE_ENV === 'development'
            ? ''
            : '<link href="/css/main.css" rel="stylesheet" type="text/css">'
        }
      </head>
      <body>
        <main class="root" style="height: 100%; display: flex; flex-direction: column;">${html}</main>
        <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
        <script src="/js/main.js"></script>
      </body>
    </html>
    `;
}

export default function serverRenderer() {
  return (req, res) => {
    const context = {};
    const store = configureStore();
    const root = <Root context={context} location={req.url} Router={StaticRouter} />;

    const htmlString = renderToString(root);

    if (context.url) {
      res.writeHead(302, {
        Location: context.url
      });
      res.end();
      return;
    }

    res.send(renderHtml(htmlString));
  };
}
