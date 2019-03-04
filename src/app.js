import React,{ PureComponent } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classNames/bind';

import Home from './pages/home';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';

import styles from './style.scss';

const cx = classNames.bind(styles);

import '../style/reset.scss';
import '../style/common.scss';

class App extends PureComponent{
    render(){
        return (
            <>
                <Home />
                {/* <Detail /> */}
                {/* <NotFound /> */}
            </>
        );
    }
}

ReactDOM.render(<ErrorBoundary> <App/> </ErrorBoundary>    
, document.querySelector(".root"))