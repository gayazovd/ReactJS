import {React, PureComponent} from 'react';

class SearchButton{
    render() {
        return (
            <button> {this.props.text} </button>
        )
    }
}

export default SearchButton;