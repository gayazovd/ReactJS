import React,{ PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Header from './containers/header/header.js';

class App extends PureComponent{
    render(){
        return (
            <div>
                <Header/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector(".root"));