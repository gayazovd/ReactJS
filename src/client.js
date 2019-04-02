import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Root from './app';
import configureStore from './store/configureStore';

const store = configureStore(window.PRELOADED_STATE);

ReactDOM.hydrate(<Root Router={BrowserRouter} store={store} />, document.querySelector('.root'));
