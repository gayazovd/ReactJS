import React,{ PureComponent } from 'react';
import classNames from 'classnames/bind';
import s from './App.sass';

const cx = classNames.bind(s);

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    componentDidUpdate() {
        
    }

    componentDidCatch(e){
        
    }

    tick = () => {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1 className = {cx({test: true})}>Hello, world!</h1>
                <FormattedDate date={this.state.date} />
            </div>
    );
  }
}

export default function App() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    );
}


