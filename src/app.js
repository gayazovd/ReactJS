import React,{ PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';

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