import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Root from './app';
import configureStore from './store/configureStore';

function renderHtml(html) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <base href="/" />
        <title>Document</title>
      </head>
      <body>
        <main class="root" style="height: 100%; display: flex; flex-direction: column;">${html}</main>
      </body>
    </html>
    `;
}

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
  };
}
