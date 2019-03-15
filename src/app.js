import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Home from './pages/home';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import classNames from 'classNames/bind';

import styles from './style.scss';

const cx = classNames.bind(styles);

import '../style/reset.scss';
import '../style/common.scss';

const store = configureStore();

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        {/* <Home /> */}
        <Detail />
        {/* <NotFound /> */}
      </Provider>
    );
  }
}

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.querySelector('.root')
);
