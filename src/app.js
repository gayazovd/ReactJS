import React, { PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NotFound from './pages/Error404';
import '../style/reset.scss';
import '../style/common.scss';

class App extends PureComponent {
    render() {
        return (
            <Provider store={this.props.store}>
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

const Root = ({ Router, location, context, store }) => {
    return (
        <Router location={location} context={context}>
            <App store={store} />
        </Router>
    );
};
export default Root;
