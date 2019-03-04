import React, { PureComponent } from 'react'


export default class ErrorBoundary extends PureComponent{
    state = {
        hasError: false,
        error: null,
        errorInfo: null
    }

    componentDidCatch(error, errorInfo){
        this.setState({
            hasError: true,
            error,
            errorInfo
        });
    }

    render(){
        if(this.state.hasError){
            return (<div> Error!!</div>)
        }
        return this.props.children;
    }
}