import React,{ PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import '../style/reset.scss';
import '../style/commons.scss';

class App extends PureComponent{
    render(){
        return (
            <div>
                <Home />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector(".root"));