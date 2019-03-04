import React,{ PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import Detail from './pages/Detail';
import '../style/reset.scss';
import '../style/commons.scss';

class App extends PureComponent{
    render(){
        return (
            <div>
                {/* <Home /> */}
                <Detail/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector(".root"));