import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NotFound from './pages/Error404';
import ErrorBoundary from './components/ErrorBoundary';
import classNames from 'classNames/bind';

import styles from './style.scss';

const cx = classNames.bind(styles);

import '../style/reset.scss';
import '../style/common.scss';

const { store } = configureStore();

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/search" />} />
          <Route path="/search" component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Provider>
    );
  }
}

const Root = ({ Router }) => {
  return (
    <Router>
      <App />
    </Router>
  );
};
export default Root;

ReactDOM.render(<Root Router={BrowserRouter} />, document.querySelector('.root'));
