import React, { PureComponent } from 'react';
import SearchPanelView from './view';

const TABS = ['genre', 'title'];

class SearchPanel extends PureComponent {

    state = {
        search: '',
        tab: 'genre'
    }

    handleChangeInput = (e) => {
        const search = e.target.value;

        this.setState({
            search,
        })
    }

    handleClick = () => {
        console.log(this.state);
    }

    handleTabClick = tab => {
        this.setState({
            activeTab: tab
        })
    }
 
    render() {
        return ( 
           <SearchPanelView 
            {...this.state} 
            onInputChange={this.handleChangeInput} 
            onClick={this.handleClick}
            onTabClick={this.handleTabClick}
           />     
        );
    }
}

export default SearchPanel;